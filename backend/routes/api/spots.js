const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Spot } = require('../../db/models');

router.get('/', asyncHandler(async function (_req, res) {
    const spots = await Spot.findAll();
    return res.json(spots);
}));

module.exports = router