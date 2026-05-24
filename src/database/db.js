require('dotenv').config();
const { Pool } = require('pg');
const { createClient } = require('@supabase/supabase-js');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

pool.on('connect', () => console.log('DB pool connected'));
pool.on('error', (err) => console.error('DB error:', err.message));

module.exports = { pool, supabase };