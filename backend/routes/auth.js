const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const SECRET_KEY = process.env.JWT_SECRET_KEY;

router.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        const token = jwt.sign({ userId: newUser.id }, SECRET_KEY, { expiresIn: '1h' });
        return res.status(201).json({ message: 'Signup successful', token, user: newUser });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: 'Email already exists' });
        }
        console.error('Signup error:', error.message);
        console.error(error.stack);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log('Login request received for email:', email);

        const user = await User.findOne({ where: { email } });
        if (!user) {
            console.log('User not found for email:', email);
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Password does not match for user:', user.id);
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
        console.log('Login successful for user:', user.id);
        return res.status(200).json({ token, user });
    } catch (error) {
        console.error('Login error:', error.message);
        console.error(error.stack);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/verify-token', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ valid: false });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await User.findByPk(decoded.userId);
        if (!user) {
            return res.status(401).json({ valid: false });
        }

        return res.status(200).json({ valid: true, user });
    } catch (error) {
        return res.status(401).json({ valid: false });
    }
});

module.exports = router;
