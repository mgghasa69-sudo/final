const express = require('express');
const router = express.Router();
const supabase = require('../database/db');

// POST /orders — place a new order and award points
router.post('/', async (req, res) => {
  const { customer_name, customer_email, items, total, order_type, notes } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ message: 'Order must have at least one item.' });
  }

  // 1. Save the order
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert([{
      customer_name: customer_name || 'Guest',
      customer_email: customer_email || '',
      items,
      total,
      order_type,
      notes: notes || '',
      status: 'pending'
    }])
    .select()
    .single();

  if (orderError) {
    console.error('Order insert error:', orderError);
    return res.status(500).json({ message: 'Failed to place order.', error: orderError.message });
  }

  // 2. Award points if user is logged in (not a Guest)
  if (customer_name && customer_name !== 'Guest') {
    const pointsToAdd = Math.floor(total / 50);

    if (pointsToAdd > 0) {
      // Get current points
      const { data: user, error: userError } = await supabase
        .from('users')
        .select('points')
        .eq('username', customer_name)
        .single();

      if (!userError && user) {
        const newTotal = (user.points || 0) + pointsToAdd;
        await supabase
          .from('users')
          .update({ points: newTotal })
          .eq('username', customer_name);
      }
    }
  }

  res.status(201).json({ success: true, order });
});

// GET /orders/all — fetch all orders (admin)
router.get('/all', async (req, res) => {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json({ orders: data });
});

// PATCH /orders/:id/status — update order status (admin)
router.patch('/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const { error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', id);

  if (error) return res.status(500).json({ error: error.message });
  res.json({ success: true });
  async function addPoints(pointsToAdd) {
  if (!currentUser) return 0;
  // Points are now awarded server-side in /orders POST
  // Just re-fetch the updated total from the DB
  await fetchPoints();
  return currentPoints;
}
});

module.exports = router;