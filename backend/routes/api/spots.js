const { response } = require('express');
const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const router = express.Router();

const { User, Spot, Booking, Review } = require('../../db/models');

router.get('/', asyncHandler(async function (_req, res) {
    const spots = await Spot.findAll();
    const users = await User.findAll();
    const reviews = await Review.findAll();
    return res.json({ spots, users, reviews });
}));

// router.get('/:id/delete', asyncHandler(async function (_req, res) {
//     const spots = await Spot.findAll();
//     const users = await User.findAll();
//     const reviews = await Review.findAll();
//     return res.json({ spots, users, reviews });
// }));

router.get('/:id(\\d+)', async (req, res) => {
    const spotId = req.params.id;
    const spot = await Spot.findByPk(spotId);
    return res.json(spot)
})

router.delete('/:id', asyncHandler(async (req, res) => {
    const spot = await Spot.findByPk(req.params.id)
    const bookings = await Booking.findAll({ where: { spotId: [spot.id] } })
    const reviews = await Review.findAll({ where: { spotId: [spot.id] } })
    bookings.forEach(async (booking) => {
        await booking.destroy()
    })
    reviews.forEach(async (review) => {
        await review.destroy()
    })
    await spot.destroy();
    return res.json({ message: 'success' })
}))

router.put('/:id', asyncHandler(async (req, res) => {
    const { city, state, country, price, imgUrl } = req.body
    const spot = await Spot.findByPk(req.params.id);
    spot.set({ city, state, country, price, imgUrl })
    await spot.save()
    return res.json(spot)
}))

router.post('/', restoreUser, asyncHandler(async function (req, res) {
    const { city, state, country, price, imgUrl } = req.body
    const userId = req.user.id
    const spot = await Spot.create({
        city,
        state,
        country,
        price,
        imgUrl,
        userId
    })


    return res.json(spot)
}))

router.post('/:id/review', restoreUser, asyncHandler(async function (req, res) {
    const spotId = req.params.id
    const { reviewContent } = req.body;
    const userId = req.user.id;
    const review = await Review.create({
        userId,
        spotId,
        reviewContent
    })
    return res.json({review});
}))

module.exports = router