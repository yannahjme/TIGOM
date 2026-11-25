const express = require('express');
const router = express.Router();
const db = require('../db');

// READ: Get all expenses for a user (newest first)
router.get('/:userId', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM expenses WHERE user_id = ? ORDER BY expense_date DESC, created_at DESC',
      [req.params.userId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE: Add a new expense
router.post('/', async (req, res) => {
  const { user_id, account_id, category, amount, description, expense_date } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO expenses (user_id, account_id, category, amount, description, expense_date) VALUES (?, ?, ?, ?, ?, ?)',
      [user_id, account_id || null, category, amount, description || null, expense_date]
    );
    res.status(201).json({
      message: 'Expense added',
      expense_id: result.insertId
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE: Edit an existing expense
router.put('/:id', async (req, res) => {
  const { category, amount, description, expense_date } = req.body;
  try {
    await db.query(
      'UPDATE expenses SET category = ?, amount = ?, description = ?, expense_date = ? WHERE expense_id = ?',
      [category, amount, description, expense_date, req.params.id]
    );
    res.json({ message: 'Expense updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE: Remove an expense
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM expenses WHERE expense_id = ?', [req.params.id]);
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;