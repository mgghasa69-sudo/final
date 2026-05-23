const express = require('express');
const router = express.Router();
const supabase = require('../database/db');

// GET /points/:username — fetch current points
router.get('/:username', async (req, res) => {
  const { username } = req.params;

  const { data, error } = await supabase
    .from('users')
    .select('points')
    .eq('username', username)
    .single();

  if (error || !data) return res.status(404).json({ message: 'User not found', points: 0 });
  res.json({ points: data.points || 0 });
});

// POST /points/add — add points to a user
router.post('/add', async (req, res) => {
  const { username, points } = req.body;

  if (!username || !points) {
    return res.status(400).json({ message: 'username and points are required' });
  }

  // First get current points
  const { data: user, error: fetchError } = await supabase
    .from('users')
    .select('points')
    .eq('username', username)
    .single();

  if (fetchError || !user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const newTotal = (user.points || 0) + points;

  const { error: updateError } = await supabase
    .from('users')
    .update({ points: newTotal })
    .eq('username', username);

  if (updateError) {
    return res.status(500).json({ message: 'Failed to update points', error: updateError.message });
  }

  res.json({ success: true, totalPoints: newTotal });
});

module.exports = router;