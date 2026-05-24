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
        res.status(500).json({ error: err.message });
    }
});

// GET CART
router.get('/:user_id', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT cart.*, products.name, products.price
             FROM cart
             JOIN products ON cart.product_id = products.id
             WHERE cart.user_id = $1`,
            [req.params.user_id]
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;