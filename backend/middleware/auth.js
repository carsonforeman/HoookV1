const jwt = require('jsonwebtoken');
const User = require('../models/user');
const SECRET_KEY = process.env.JWT_SECRET_KEY;

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await User.findByPk(decoded.userId);
        if (!user) return res.sendStatus(403);

        req.user = { userId: user.id };
        next();
    } catch (err) {
        return res.sendStatus(403);
    }
};

module.exports = { authenticateToken };
