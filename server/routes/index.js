const router = require('express').Router()
const orderRoute = require('./order')
const stockRoute = require('./stock')
const kulakanRoute = require('./kulakan')

router.use('/order', orderRoute)
router.use('/stock', stockRoute)
router.use('/kulakan', kulakanRoute)

module.exports = router