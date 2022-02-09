const { response } = require('express');
const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Spot, Booking, Review } = require('../../db/models');

router.get('/', asyncHandler(async function (_req, res) {
    const spots = await Spot.findAll();
    return res.json(spots);
}));

router.get('/:id(\\d+)', async (req, res) => {
    const spotId = req.params.id;
    const spot = await Spot.findByPk(spotId);
    return res.json(spotId)

})

router.delete('/:id', asyncHandler(async(req, res) => {
    const spot = await Spot.findByPk(req.params.id)
    const bookings = await Booking.findAll({where: {spotId: [spot.id]}})
    const reviews = await Review.findAll({ where: { spotId: [spot.id] } })
    bookings.forEach(async (booking) => {
        await booking.destroy()
    })
    reviews.forEach(async (review) => {
        await review.destroy()
    })
    await spot.destroy();
    return res.json({message: 'success'})
}))

router.put('/:id', asyncHandler(async(req, res) => {
    const { city, state, country, price, imgUrl } = req.body
    const spot = await Spot.findByPk(req.params.id);
    spot.set({city, state, country, price, imgUrl})
    await spot.save()
    return res.json(spot)
}))

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