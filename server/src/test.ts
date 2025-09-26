import pool from './config/db';
import dotenv from 'dotenv';
dotenv.config();


async function testConnection() {
  try {
    const res = await pool.query('SELECT * FROM users LIMIT 1');
    console.log('Connection successful! Sample data:', res.rows);
  } catch (err) {
    console.error('Database connection failed:', err);
  } finally {
    pool.end(); // close the connection pool
  }
}

testConnection();
