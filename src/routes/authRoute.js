const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pool } = require('../database/db');

const router = express.Router();

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
};

// ✅ FIXED: now includes username in token
const generateToken = (id, username) => {
    return jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );

    if (existingUser.rows.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, hashedPassword]
    );

    // ✅ FIXED: pass username to generateToken
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
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );

    if (user.rows.length === 0) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const userData = user.rows[0];

    const isMatch = await bcrypt.compare(password, userData.password);

    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // ✅ FIXED: pass username to generateToken
    const token = generateToken(userData.id, userData.username);

    res.cookie('token', token, cookieOptions);

    return res.json({
        user: {
            id: userData.id,
            username: userData.username,
            email: userData.email
        }
    });
});

const protect = (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

// ✅ FIXED: returns id + username + email from DB
router.get('/me', protect, async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT id, username, email FROM users WHERE id = $1',
            [req.user.id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/logout', (req, res) => {
    res.cookie('token', '', {
        ...cookieOptions,
        maxAge: 0
    });
    res.json({ message: 'Logged out successfully' });
});

module.exports = router;