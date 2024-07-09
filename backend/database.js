const { Sequelize } = require('sequelize');

// Create a new Sequelize instance using environment variables for configuration
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    logging: false, // Disable logging; default: console.log
});

// Authenticate and sync the database
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Database connection error:', err.message));

module.exports = sequelize;
