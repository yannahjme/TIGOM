const express = require('express');
const router = express.Router();
const db = require('../db');

// GET dashboard summary for a user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const [[accountTotals]] = await db.query(
      'SELECT COALESCE(SUM(balance), 0) AS total_balance, COUNT(*) AS wallet_count FROM accounts WHERE user_id = ?',
      [userId]
    );

    const [[expenseTotals]] = await db.query(
      'SELECT COALESCE(SUM(amount), 0) AS total_spent, COUNT(*) AS expense_count FROM expenses WHERE user_id = ?',
      [userId]
    );

    const [recentExpenses] = await db.query(
      'SELECT * FROM expenses WHERE user_id = ? ORDER BY expense_date DESC, created_at DESC LIMIT 5',
      [userId]
    );

    res.json({
      total_balance: Number(accountTotals.total_balance),
      wallet_count: accountTotals.wallet_count,
      total_spent: Number(expenseTotals.total_spent),
      expense_count: expenseTotals.expense_count,
      recent_expenses: recentExpenses
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;