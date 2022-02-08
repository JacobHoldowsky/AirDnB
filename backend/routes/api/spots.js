const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Spot } = require('../../db/models');

router.get('/', asyncHandler(async function (_req, res) {
    const spots = await Spot.findAll();
    return res.json(spots);
}));

router.get('/:id(\\d+)', async (req, res) => {
    const spotId = req.params.id;
    const spot = await Spot.findByPk(spotId);
    return res.json(spot)

})

router.post('/' ,asyncHandler(async function(req, res) {
    const {city, state, country, price, imgUrl} = req.body
    const spot = await Spot.create({
        city,
        state,
        country,
        price,
        imgUrl
    })

    return res.json(spot)
}))

module.exports = router