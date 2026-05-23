require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const { pool } = require('./src/database/db');
const authRouter = require('./src/routes/authRoute');
const cartRouter = require('./src/routes/cartRoutes');

const app = express();

// MIDDLEWARE
app.use(cors({
    origin: ['http://localhost:5000'],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// SERVE STATIC FRONTEND FILES
app.use(express.static(path.join(__dirname, '..', 'Frontend')));

// ROUTES
app.use('/auth', authRouter);
app.use('/cart', cartRouter);

// DATABASE TEST ROUTE
app.get('/db-test', async (req, res) => {
    try {
        console.log("Start");
        const result = await pool.query("SELECT current_database()");
        console.log("End");
        res.send(`The database name is ${result.rows[0].current_database}`);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Database connection failed" });
    }
});

// ─── RESERVATIONS ────────────────────────────────────────────────────────────

// POST - Create reservation
app.post('/reservation', async (req, res) => {
    try {
        const { name, email, date, time } = req.body;
        await pool.query(
            `INSERT INTO reservations (name, email, reservation_date, reservation_time) VALUES ($1, $2, $3, $4)`,
            [name, email, date, time]
        );
        res.status(201).json({ message: "Reservation saved successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Reservation failed" });
    }
});

// GET - All reservations (admin dashboard)
app.get('/reservations/all', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT * FROM reservations ORDER BY reservation_date ASC, reservation_time ASC`
        );
        res.json({ reservations: result.rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch reservations' });
    }
});

// DELETE - Remove reservation (admin dashboard)
app.delete('/reservations/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query(`DELETE FROM reservations WHERE id = $1`, [id]);
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete reservation' });
    }
});

// ─── ORDERS ──────────────────────────────────────────────────────────────────

// POST - Create order
app.post('/orders', async (req, res) => {
    try {
        const { customer_name, customer_email, items, total, notes, order_type } = req.body;

        console.log('Order received:', req.body);

        const result = await pool.query(
            `INSERT INTO orders (customer_name, customer_email, items, total, notes, order_type, status)
             VALUES ($1, $2, $3, $4, $5, $6, 'pending')
             RETURNING *`,
            [customer_name, customer_email, JSON.stringify(items), total, notes || '', order_type || 'dine-in']
        );

        res.status(201).json({ message: 'Order placed successfully', order: result.rows[0] });
    } catch (error) {
        console.error('Order error:', error);
        res.status(500).json({ message: 'Order failed', error: error.message });
    }
});

// GET - All orders (admin dashboard)
app.get('/orders/all', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT * FROM orders ORDER BY created_at DESC`
        );
        res.json({ orders: result.rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch orders' });
    }
});

// PATCH - Update order status (admin dashboard)
app.patch('/orders/:id/status', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        await pool.query(
            `UPDATE orders SET status = $1 WHERE id = $2`,
            [status, id]
        );
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update status' });
    }
});

// DELETE - Remove order (admin dashboard)
app.delete('/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query(`DELETE FROM orders WHERE id = $1`, [id]);
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete order' });
    }
});

// ─── FALLBACK ─────────────────────────────────────────────────────────────────

app.get('*path', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'index.html'));
});

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// DELETE - Remove order (admin dashboard)
app.delete('/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Deleting order id:', id); // ← add this
        const result = await pool.query(`DELETE FROM orders WHERE id = $1 RETURNING *`, [id]);
        console.log('Deleted rows:', result.rowCount); // ← add this
        res.json({ success: true });
    } catch (error) {
        console.error('Delete order error:', error.message); // ← add this
        res.status(500).json({ message: 'Failed to delete order', error: error.message });
    }
});