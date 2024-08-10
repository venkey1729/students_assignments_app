const app = require('./app');
require('dotenv').config();

const { connectDB } = require('./config/database');

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to the database', err);
});
