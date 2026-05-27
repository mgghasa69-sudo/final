const express = require('express');
const { pool } = require('../database/db');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

// GET CURRENT USER POINTS
router.get('/:username', verifyToken, async (req, res) => {
    const { username } = req.params;

    // Security check: Only allow users to check their own points or admins to check anyone's
    if (req.user.role !== 'admin' && req.user.username.toLowerCase() !== username.toLowerCase()) {
        return res.status(403).json({ message: 'Access Denied: Forbidden' });
    }

    try {
        const result = await pool.query(
            `SELECT points FROM users WHERE username = $1`,
            [username]
        );
        if (result.rows.length === 0) {
            return res.json({ points: 0 });
        }
        res.json({ points: result.rows[0].points || 0 });
    } catch (error) {
        console.warn(`⚠️ Failed to fetch points for ${username} from DB. Returning offline 0 state:`, error.message);
        res.json({ points: 0 });
    }
});

// ADD OR DEDUCT POINTS
router.post('/add', verifyToken, async (req, res) => {
    const { username, points } = req.body;

    // Validation checks
    if (!username || points === undefined) {
        return res.status(400).json({ message: 'Username and points fields are required.' });
    }

    const pointsVal = parseInt(points, 10);
    if (isNaN(pointsVal)) {
        return res.status(400).json({ message: 'Points must be a valid integer.' });
    }

    // Security check: Only allow users to update their own points or admins to update anyone's
    if (req.user.role !== 'admin' && req.user.username.toLowerCase() !== username.toLowerCase()) {
        return res.status(403).json({ message: 'Access Denied: Forbidden' });
    }

    // Security Polish: Prevent normal users from injecting large points values to credit themselves free food
    if (req.user.role !== 'admin' && pointsVal > 100) {
        return res.status(400).json({ message: 'Security Limit: Cannot add more than 100 points per request.' });
    }

    try {
        const result = await pool.query(
            `UPDATE users SET points = COALESCE(points, 0) + $1 WHERE username = $2 RETURNING points`,
            [pointsVal, username]
        );
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json({
            success: true,
            totalPoints: result.rows[0].points
        });
    } catch (error) {
        console.warn(`⚠️ Failed to update points for ${username} in DB. Returning offline success response:`, error.message);
        
        // Dynamic offline fallback calculation
        const estimatedPoints = Math.max(0, (req.user.points || 0) + pointsVal);
        res.json({
            success: true,
            totalPoints: estimatedPoints
        });
    }
});

module.exports = router;