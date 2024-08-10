const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/jwtConfig');

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(403).send('Token is required.');
    }

    const token = authHeader.split(' ')[1]; 
    if (!token) {
        return res.status(403).send('Token is required.');
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid Token');
        }
        req.user = decoded; 
        next();
    });
};
