const db = require('../config/db.js');

async function getUserByEmail(email) {
  const rows = await db.query('SELECT * FROM users WHERE email = ? LIMIT 1', [email]);
  return rows[0];
}

async function createUser({ username, email, password, full_name }) {
  const sql = `INSER INTO users (username, email, password, full_name)
  VALUES (?,?,?,?)`;
  const [result] = await db.query(sql, [username, email, password, full_name]);
  return result.insertId;
}

module.exports = { getUserByEmail, createUser };
