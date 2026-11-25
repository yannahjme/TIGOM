const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all accounts for a specific user
router.get('/:userId', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM accounts WHERE user_id = ? ORDER BY created_at DESC',
      [req.params.userId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create a new account/wallet
router.post('/', async (req, res) => {
  const { user_id, account_name, account_type, balance } = req.body;

  if (!user_id || !account_name) {
    return res.status(400).json({ error: 'user_id and account_name are required' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO accounts (user_id, account_name, account_type, balance) VALUES (?, ?, ?, ?)',
      [user_id, account_name, account_type || 'Cash', balance || 0]
    );
    res.status(201).json({
      message: 'Account created',
      account_id: result.insertId
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update an account's name or balance
router.put('/:id', async (req, res) => {
  const { account_name, account_type, balance } = req.body;

  try {
    await db.query(
      'UPDATE accounts SET account_name = ?, account_type = ?, balance = ? WHERE account_id = ?',
      [account_name, account_type, balance, req.params.id]
    );
    res.json({ message: 'Account updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE an account
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM accounts WHERE account_id = ?', [req.params.id]);
    res.json({ message: 'Account deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;