const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

/**
 * Protect middleware (typically used for route-level customer endpoints)
 * Looks for cookie-based token, verifies it, checks database, and falls back gracefully if database is offline.
 */
const protect = async (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({ message: 'Not authorized, no token found.' });
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        // Dynamic database verification with graceful offline fallback
        try {
            const { pool } = require('../database/db');
            if (pool) {
                const userResult = await pool.query(
                    'SELECT id, username, email FROM users WHERE id = $1',
                    [decoded.id]
                );

                if (userResult.rows.length === 0) {
                    return res.status(401).json({ message: 'Not authorized, user not found.' });
                }
                
                // Merge database record into req.user
                req.user = { ...decoded, ...userResult.rows[0] };
            } else {
                req.user = decoded;
            }
        } catch (dbError) {
            console.warn('⚠️ Database connection offline during auth verification. Using token payload fallback:', dbError.message);
            req.user = decoded;
        }

        next();
    } catch (error) {
        console.error('Auth protect middleware error:', error.message);
        res.status(401).json({ message: 'Not authorized, session token is invalid or expired.' });
    }
};

/**
 * Robust token verifier middleware (typically used in server.js and general API endpoints)
 * Checks headers, cookies, signedCookies, and matches cookies starting with 'eyJ'.
 */
const verifyToken = (req, res, next) => {
    let token = null;

    // 1. Authorization Header
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    }

    // 2. Parsed Cookies
    if (!token && req.cookies) {
        token = req.cookies.token || req.cookies.jwt || req.cookies.session;
    }

    // 3. Signed Cookies
    if (!token && req.signedCookies) {
        token = req.signedCookies.token || req.signedCookies.jwt || req.signedCookies.session;
    }

    // 4. Fallback: Search all cookie names for a JWT structure
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

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing or malformed access token.' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden: Invalid or expired session token.' });
        }
        req.user = decoded;
        next();
    });
};

/**
 * Admin check middleware
 * Ensures the authenticated user holds the administrative role.
 */
const requireAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        return next();
    }
    return res.status(403).json({ message: 'Access Denied: Administrative privileges required.' });
};

module.exports = {
    protect,
    verifyToken,
    requireAdmin
};