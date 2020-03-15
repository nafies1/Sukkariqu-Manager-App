const router = require('express').Router()
const Kulakan = require('../controllers/kulakanController')

router.post('/', Kulakan.create)
router.get('/', Kulakan.findAll)
router.get('/:id', Kulakan.findOne)
router.put('/:id', Kulakan.update)
router.delete('/:id', Kulakan.delete)

module.exports = router