const mysql = require('mysql2/promise');
require('dotenv').config();

async function connectDB() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'students'
    });

    console.log('Connected to the MySQL database');
    return connection;
}

module.exports = { connectDB };
