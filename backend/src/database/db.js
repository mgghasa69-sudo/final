require('dotenv').config({ path: require('path').join(__dirname, '..', '..', '.env') });
const { Pool } = require('pg');
const { createClient } = require('@supabase/supabase-js');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,                 // Highly optimized for Supabase limits (prevents connection starvation)
    idleTimeoutMillis: 30000, // Terminate idle clients after 30 seconds
    connectionTimeoutMillis: 2000 // Timeout fast if connection fails
});

let supabase = null;
if (process.env.SUPABASE_URL && process.env.SUPABASE_KEY) {
    try {
        supabase = createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_KEY
        );
    } catch (err) {
        console.error("Failed to initialize Supabase client:", err.message);
    }
} else {
    console.warn("WARNING: Supabase URL or Key is missing from environment variables.");
}

pool.on('connect', () => console.log('DB pool connected'));
pool.on('error', (err) => console.error('DB error:', err.message));

module.exports = { pool, supabase };