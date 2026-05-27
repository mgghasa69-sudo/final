const express = require('express');
const { pool } = require('../database/db');

const router = express.Router();

// ADD TO CART
router.post('/add', async (req, res) => {
    const { user_id, product_id, quantity } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *',
            [user_id, product_id, quantity]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.warn('⚠️ Cart DB add failed. Returning offline fallback response:', err.message);
        res.json({
            user_id,
            product_id,
            quantity: quantity || 1,
            added_offline: true
        });
    }
});

// GET CART
router.get('/:user_id', async (req, res) => {
    const { user_id } = req.params;

    try {
        const result = await pool.query(
            `SELECT cart.*, products.name, products.price
             FROM cart
             JOIN products ON cart.product_id = products.id
             WHERE cart.user_id = $1`,
            [user_id]
        );
        res.json(result.rows);
    } catch (err) {
        console.warn(`⚠️ Failed to fetch cart for user ${user_id} from database. Returning empty cart fallback:`, err.message);
        res.json([]);
    }
});

module.exports = router;