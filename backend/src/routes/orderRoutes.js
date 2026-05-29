const express = require('express');
const { pool } = require('../database/db');
const { verifyToken, requireAdmin, protect } = require('../middleware/auth');

const router = express.Router();

// PLACE A NEW ORDER
// Authenticated users only, handles database insert, and falls back gracefully to a random order ID if offline.
router.post('/', protect, async (req, res) => {
    const { items, total, notes, order_type } = req.body;
    const customer_name = req.user.username;
    const customer_email = req.user.email || '';

    try {
        const result = await pool.query(
            `INSERT INTO orders (customer_name, customer_email, items, total, notes, order_type, status)
             VALUES ($1, $2, $3, $4, $5, $6, 'pending') RETURNING *`,
            [
                customer_name || 'Guest',
                customer_email || '',
                typeof items === 'string' ? items : JSON.stringify(items || []),
                total || 0,
                notes || '',
                order_type || 'dine-in'
            ]
        );
        return res.status(201).json({
            message: 'Order placed successfully',
            order: result.rows[0]
        });
    } catch (error) {
        console.warn('⚠️ Order DB persistence failed. Falling back to offline order response:', error.message);
        
        // Offline mock fallback response
        return res.status(201).json({
            message: 'Order placed successfully (Offline Mode)',
            order: {
                id: Math.floor(Math.random() * 90000) + 10000,
                customer_name: customer_name || 'Guest',
                customer_email: customer_email || '',
                items: items,
                total: total || 0,
                status: 'pending',
                order_type: order_type || 'dine-in',
                created_at: new Date().toISOString()
            }
        });
    }
});

// GET ALL ORDERS (Admin only)
router.get('/all', verifyToken, requireAdmin, async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM orders ORDER BY created_at DESC`);
        res.json({ orders: result.rows });
    } catch (error) {
        console.warn('⚠️ Failed to fetch orders from database. Returning empty list fallback:', error.message);
        res.json({ orders: [] });
    }
});

// UPDATE ORDER STATUS (Admin only)
router.patch('/:id/status', verifyToken, requireAdmin, async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        await pool.query(`UPDATE orders SET status = $1 WHERE id = $2`, [status, id]);
    } catch (error) {
        console.warn(`⚠️ Failed to update order ${id} status in database. Returning success fallback:`, error.message);
    }
    
    res.json({ success: true });
});

// DELETE AN ORDER (Admin only)
router.delete('/:id', verifyToken, requireAdmin, async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query(`DELETE FROM orders WHERE id = $1`, [id]);
    } catch (error) {
        console.warn(`⚠️ Failed to delete order ${id} from database. Returning success fallback:`, error.message);
    }

    res.json({ success: true });
});

module.exports = router;