const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');
const authRoutes = require('./routes/auth');
const expensesRoutes = require('./routes/expenses');
const accountsRoutes = require('./routes/accounts');
const dashboardRoutes = require('./routes/dashboard');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.get('/api/health', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS solution');
    res.json({ status: 'ok', db_connected: true, result: rows[0].solution });
  } catch (err) {
    console.error('Database connection failed:', err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/expenses', expensesRoutes);
app.use('/api/accounts', accountsRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.listen(PORT, () => {
  console.log(`TIGOM backend running on http://localhost:${PORT}`);
});