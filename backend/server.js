require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const authRoutes = require('./routes/auth');
const ventureRoutes = require('./routes/ventures');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sync database
sequelize.sync()
    .then(() => console.log('Database synchronized...'))
    .catch(err => console.log('Database sync error:', err.message));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/ventures', ventureRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
