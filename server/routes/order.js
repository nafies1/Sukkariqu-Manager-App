const router = require('express').Router()
const Order = require('../controllers/orderController')

router.post('/', Order.create)
router.get('/', Order.findAll)
router.get('/:id', Order.findOne)
router.put('/:id', Order.update)
router.delete('/:id', Order.delete)

module.exports = router