const express = require('express')
const router = express.Router()

const clothingController = require('../controllers/clothingControllers')


router.get('/', clothingController.getUser)

router.get('/:id', clothingController.getById)

router.post('/', clothingController.postClothing)


router.put('/:id', clothingController.updateClothing)

router.delete('/:id', clothingController.removeClothing)



module.exports = router;