const express = require('express')
const router = express.Router()

const clothingController = require('../controllers/clothingControllers')


router.get('/', clothingController.getClothes)

router.get('/:id', clothingController.getClothesById)

router.post('/', clothingController.postClothing)


router.put('/:id', clothingController.updateClothing)

router.delete('/:id', clothingController.removeClothing)




module.exports = router;

