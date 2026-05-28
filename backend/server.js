require('dotenv').config({ path: require('path').join(__dirname, '.env') });

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

// ─── DATABASE POOL LAZY-LOAD & STARTUP TEST ─────────────────────────────────────
let pool = null;
let dbAvailable = false;

function getPool() {
    if (pool) return pool;
    try {
        const { pool: p } = require('./src/database/db');
        pool = p;
        dbAvailable = true;
        return pool;
    } catch (e) {
        dbAvailable = false;
        return null;
    }
}

// Test database connection on startup (non-blocking)
(async () => {
    try {
        const p = getPool();
        if (p) {
            await p.query('SELECT 1');
            dbAvailable = true;
            console.log('[SUCCESS] Database connected successfully.');
        }
    } catch (e) {
        dbAvailable = false;
        console.warn('[WARNING] Database unavailable — running Express in offline/resilient mode:', e.message);
    }
})();

// ─── CORE EXPRESS MIDDLEWARE ───────────────────────────────────────────────────
app.use(cors({
    origin: function (origin, callback) {
        // Allow Vercel, localhost, and sandbox requests in development
        if (!origin || /\.vercel\.app$/.test(origin) || /localhost/.test(origin)) {
            callback(null, true);
        } else {
            callback(null, true); // Dev-mode fallback
        }
    },
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Vercel serverless request path restorer
app.use((req, res, next) => {
    if (req.query.route) {
        req.url = req.query.route;
    }
    next();
});

// Serve frontend assets statically
app.use(express.static(path.join(__dirname, '..', 'public')));

// ─── ROUTER INTEGRATION ───────────────────────────────────────────────────────
const authRouter = require('./src/routes/authRoute');
const cartRouter = require('./src/routes/cartRoutes');
const reservationRouter = require('./src/routes/reservationRoutes');
const orderRouter = require('./src/routes/orderRoutes');
const pointsRouter = require('./src/routes/pointsRoute');

app.use('/auth', authRouter);
app.use('/cart', cartRouter);
app.use('/', reservationRouter); // Covers /reservation (POST), /reservations/all (GET), /reservations/:id (DELETE)
app.use('/orders', orderRouter);
app.use('/points', pointsRouter);

// ─── UTILITY & SANITY CHECKS ───────────────────────────────────────────────────
app.get('/db-test', async (req, res) => {
    try {
        const p = getPool();
        if (!p || !dbAvailable) {
            return res.json({ status: 'offline', message: 'Database is offline or not configured.' });
        }
        const result = await p.query('SELECT current_database()');
        res.json({ status: 'ok', database: result.rows[0].current_database });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

// ─── CLIENT WILD CARD ROUTING ──────────────────────────────────────────────────
app.get('/{*path}', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// ─── GLOBAL ERROR HANDLER ──────────────────────────────────────────────────────
app.use((err, req, res, next) => {
    console.error('Unhandled Server Error:', err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal server error occurred.'
    });
});

// ─── SERVER STARTUP (Local development only) ───────────────────────────────────
if (!process.env.VERCEL) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`[INFO] QuickBite Server running on port ${PORT}`));
}

module.exports = app;