const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const Venture = require('../models/Venture');  // Ensure correct capitalization

// Endpoint to create a new venture
router.post('/', authenticateToken, async (req, res) => {
    const { ventureName, ventureDescription, ventureCategory, ventureSpecifics, ventureStage, ventureResources, ventureLocation, venturePrivacy } = req.body;
    const userId = req.user.userId;

    try {
        const newVenture = await Venture.create({
            name: ventureName,
            description: ventureDescription,
            category: ventureCategory,
            specifics: ventureSpecifics,
            stage: ventureStage,
            resources: ventureResources,
            location: ventureLocation,
            privacy: venturePrivacy,
            userId: userId
        });

        res.status(201).json({ message: 'Venture created successfully', venture: newVenture });
    } catch (error) {
        console.error('Error creating venture:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to fetch all ventures
router.get('/all', async (req, res) => {
    try {
        const ventures = await Venture.findAll();
        res.status(200).json(ventures);
    } catch (error) {
        console.error('Error fetching ventures:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to fetch ventures for authenticated user
router.get('/', authenticateToken, async (req, res) => {
    try {
        const ventures = await Venture.findAll({ where: { userId: req.user.userId } });
        res.status(200).json(ventures);
    } catch (error) {
        console.error('Error fetching ventures:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to fetch a venture by name
router.get('/:ventureName', async (req, res) => {
    try {
        const ventureName = req.params.ventureName.replace(/-/g, ' ');
        const venture = await Venture.findOne({ where: { name: ventureName } });
        if (!venture) {
            return res.status(404).json({ error: 'Venture not found' });
        }
        res.json(venture);
    } catch (error) {
        console.error('Error fetching venture:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
