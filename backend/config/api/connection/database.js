const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.db,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false
});

module.exports = pool;
