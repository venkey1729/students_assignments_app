const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiry } = require('../config/jwtConfig');

exports.login = (req, res) => {
    const { username, password } = req.body;

  
    const token = jwt.sign({ username }, jwtSecret, { expiresIn: jwtExpiry });

    return res.json({ token });
};
