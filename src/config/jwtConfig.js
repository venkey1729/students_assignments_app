module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'fallback_secret',
    jwtExpiry: '1h',
};
