const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool } = require('../database/db');
const { protect } = require('../middleware/auth');

const router = express.Router();

const isProduction = process.env.NODE_ENV === 'production';

const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    path: '/'
};

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Generates token encoding user identity and role
const generateToken = (id, username, role = 'customer') => {
    return jwt.sign({ id, username, role }, JWT_SECRET, {
        expiresIn: '30d'
    });
};

// USER REGISTRATION
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Resilient DB check with fail-safe error block
        let existingUser;
        try {
            existingUser = await pool.query(
                'SELECT * FROM users WHERE email = $1',
                [email]
            );
        } catch (dbErr) {
            console.error('Database register check failed:', dbErr.message);
            return res.status(500).json({ message: 'Database connection failed. Please try again later.' });
        }

        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists with this email.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        let newUser;
        try {
            newUser = await pool.query(
                'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
                [username, email, hashedPassword]
            );
        } catch (dbErr) {
            console.error('Database register insert failed:', dbErr.message);
            return res.status(500).json({ message: 'Failed to create user record. Please try again.' });
        }

        const token = generateToken(newUser.rows[0].id, newUser.rows[0].username);

        res.cookie('token', token, cookieOptions);

        return res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser.rows[0].id,
                username: newUser.rows[0].username,
                email: newUser.rows[0].email
            }
        });
    } catch (error) {
        console.error('Register error:', error);
        return res.status(500).json({ message: 'Registration failed due to an internal error.' });
    }
});

// USER LOGIN
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        let user;
        try {
            user = await pool.query(
                'SELECT * FROM users WHERE email = $1',
                [email]
            );
        } catch (dbErr) {
            console.error('Database login check failed:', dbErr.message);
            return res.status(500).json({ message: 'Database connection failed. Please try again later.' });
        }

        if (user.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const userData = user.rows[0];

        const isMatch = await bcrypt.compare(password, userData.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        // Determine role based on email configuration
        const role = (email === 'admin@gmail.com') ? 'admin' : 'customer';

        const token = generateToken(userData.id, userData.username, role);

        res.cookie('token', token, cookieOptions);

        return res.json({
            user: {
                id: userData.id,
                username: userData.username,
                email: userData.email,
                role: role
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Login failed due to an internal error.' });
    }
});

// CURRENT SESSION RETRIEVAL
router.get('/me', protect, async (req, res) => {
    try {
        // req.user has already been resolved by auth middleware protect function
        let result;
        try {
            result = await pool.query(
                'SELECT id, username, email FROM users WHERE id = $1',
                [req.user.id]
            );
        } catch (dbErr) {
            console.warn('Database query failed for /me. Falling back to request identity:', dbErr.message);
            return res.json({
                id: req.user.id,
                username: req.user.username,
                email: req.user.email
            });
        }

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error fetching session info:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// USER LOGOUT
router.post('/logout', (req, res) => {
    res.cookie('token', '', {
        ...cookieOptions,
        maxAge: 0
    });
    res.json({ message: 'Logged out successfully' });
});

module.exports = router;