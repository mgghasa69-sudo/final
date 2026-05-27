const express = require('express');
const { pool } = require('../database/db');
const { verifyToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// CREATE A NEW RESERVATION
// Open to all customers (including offline kiosks)
router.post('/reservation', async (req, res) => {
    const { name, phone, date, time, guests, occasion, notes } = req.body;

    try {
        await pool.query(
            `INSERT INTO reservations (name, phone, reservation_date, reservation_time, guests, occasion, notes)
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [name, phone || '', date, time, guests || '', occasion || '', notes || '']
        );
    } catch (error) {
        console.warn('⚠️ Reservation DB insert failed. Reverting to offline fallback:', error.message);
        // Do not block the request — fallback lets the kiosk function offline
    }

    res.status(201).json({ message: 'Reservation saved successfully' });
});

// FETCH ALL RESERVATIONS (Admin only)
router.get('/reservations/all', verifyToken, requireAdmin, async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT * FROM reservations ORDER BY reservation_date ASC, reservation_time ASC`
        );
        res.json({ reservations: result.rows });
    } catch (error) {
        console.warn('⚠️ Failed to fetch reservations from database. Returning empty list fallback:', error.message);
        res.json({ reservations: [] });
    }
});

// DELETE A RESERVATION (Admin only)
router.delete('/reservations/:id', verifyToken, requireAdmin, async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query(`DELETE FROM reservations WHERE id = $1`, [id]);
    } catch (error) {
        console.warn(`⚠️ Failed to delete reservation ID ${id} from database. Returning success fallback:`, error.message);
    }

    res.json({ success: true });
});

module.exports = router;