const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config();

const pool = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.query('SELECT 1', (err) => (err ? console.log('DB - FAIL') : console.log('DB - OK')));

module.exports = pool.promise();
