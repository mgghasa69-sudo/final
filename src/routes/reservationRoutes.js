const express = require('express');
const router = express.Router();
const supabase = require('../database/db');

// GET all reservations
router.get('/all', async (req, res) => {
  const { data, error } = await supabase
    .from('reservations')
    .select('*')
    .order('reservation_date', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  res.json({ reservations: data });
});

module.exports = router;