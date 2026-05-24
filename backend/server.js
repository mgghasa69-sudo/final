require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken'); 

const { pool } = require('./src/database/db');
const authRouter = require('./src/routes/authRoute');
const cartRouter = require('./src/routes/cartRoutes');

const app = express();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// ─── MIDDLEWARE ───────────────────────────────────────────────────────────────
// ─── MIDDLEWARE UPDATE ───────────────────────────────────────────────────────────────
app.use(cors({
    origin: [
        'http://localhost:5500', 
        'http://127.0.0.1:5500', 
        'https://final-git-main-quickbite-s-projects.vercel.app/' // 👈 ADD YOUR LIVE VERCEL URL HERE
    ],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// SERVE STATIC FRONTEND FILES
app.use(express.static(path.join(__dirname, '..', 'Frontend')));

// ─── SECURITY MIDDLEWARE FUNCTIONS (BULLETPROOF COOKIE + HEADER DETECTION) ───
function verifyToken(req, res, next) {
    let token = null;

    // 1. Check for token in the standard Authorization Header
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    } 
    
    // 2. Check standard browser cookies
    if (!token && req.cookies) {
        token = req.cookies.token || req.cookies.jwt || req.cookies.session;
    }

    // 3. Check SIGNED browser cookies (In case your cookies are encrypted)
    if (!token && req.signedCookies) {
        token = req.signedCookies.token || req.signedCookies.jwt || req.signedCookies.session;
    }

    // 4. Emergency Scan: Loop over every cookie to find a valid JWT format ('eyJ...')
    if (!token) {
        const allCookies = { ...(req.cookies || {}), ...(req.signedCookies || {}) };
        for (const name in allCookies) {
            const val = allCookies[name];
            if (typeof val === 'string' && val.startsWith('eyJ')) {
                token = val;
                break;
            }
        }
    }

    // Process token validation if found
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decodedPayload) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden: Invalid or expired session token.' });
            }
            req.user = decodedPayload; 
            next();
        });
    } else {
        return res.status(401).json({ message: 'Unauthorized: Missing or malformed access token.' });
    }
}

function requireAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(403).json({ message: 'Access Denied: Administrative access privileges required.' });
    }
}

// ─── ROUTER ATTACHMENTS ───────────────────────────────────────────────────────
app.use('/auth', authRouter);
app.use('/cart', cartRouter);

// DATABASE TEST ROUTE
app.get('/db-test', async (req, res) => {
    try {
        const result = await pool.query("SELECT current_database()");
        res.send(`The database name is ${result.rows[0].current_database}`);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Database connection failed" });
    }
});

// ─── RESERVATIONS ─────────────────────────────────────────────────────────────

app.post('/reservation', async (req, res) => {
    try {
        const { name, phone, date, time, guests, occasion, notes } = req.body;
        await pool.query(
            `INSERT INTO reservations (name, phone, reservation_date, reservation_time, guests, occasion, notes)
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [name, phone || '', date, time, guests || '', occasion || '', notes || '']
        );
        res.status(201).json({ message: "Reservation saved successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Reservation failed" });
    }
});

app.get('/reservations/all', verifyToken, requireAdmin, async (req, res) => {
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

app.delete('/reservations/:id', verifyToken, requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query(`DELETE FROM reservations WHERE id = $1`, [id]);
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete reservation' });
    }
});

// ─── ORDERS ───────────────────────────────────────────────────────────────────

app.post('/orders', async (req, res) => {
    try {
        const { customer_name, customer_email, items, total, notes, order_type } = req.body;
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

app.get('/orders/all', verifyToken, requireAdmin, async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM orders ORDER BY created_at DESC`);
        res.json({ orders: result.rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch orders' });
    }
});

app.patch('/orders/:id/status', verifyToken, requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        await pool.query(`UPDATE orders SET status = $1 WHERE id = $2`, [status, id]);
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update status' });
    }
});

app.delete('/orders/:id', verifyToken, requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query(`DELETE FROM orders WHERE id = $1`, [id]);
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete order' });
    }
});

// ─── POINTS ───────────────────────────────────────────────────────────────────

app.get('/points/:username', verifyToken, async (req, res) => {
    try {
        const { username } = req.params;

        if (req.user.role !== 'admin' && req.user.username.toLowerCase() !== username.toLowerCase()) {
            return res.status(403).json({ message: "Forbidden: You cannot view point tracking balances for other accounts." });
        }

        const result = await pool.query(`SELECT points FROM users WHERE username = $1`, [username]);
        if (result.rows.length === 0) return res.status(404).json({ points: 0 });
        res.json({ points: result.rows[0].points || 0 });
    } catch (error) {
        console.error('Fetch points error:', error);
        res.status(500).json({ points: 0 });
    }
});

app.post('/points/add', verifyToken, async (req, res) => {
    try {
        const { username, points } = req.body;

        if (req.user.role !== 'admin' && req.user.username.toLowerCase() !== username.toLowerCase()) {
            return res.status(403).json({ message: "Forbidden: Modifying points data logs on alternate profiles is restricted." });
        }

        const result = await pool.query(
            `UPDATE users SET points = COALESCE(points, 0) + $1 WHERE username = $2 RETURNING points`,
            [points, username]
        );
        if (result.rows.length === 0) return res.status(404).json({ message: 'User not found' });
        res.json({ success: true, totalPoints: result.rows[0].points });
    } catch (error) {
        console.error('Add points error:', error);
        res.status(500).json({ message: 'Failed to update points' });
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