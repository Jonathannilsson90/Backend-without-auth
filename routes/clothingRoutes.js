//Fetch packages Express
const express = require('express')

//creating router variable using router from express package
const router = express.Router()

//using chain-method to clean up and structure code more clearly
//Also makes it more read-friendly
const {
    getClothes,
    getClothesById,
    postClothing,
    updateClothing,
    removeClothing,
  } = require("../controllers/clothingControllers");

router.route("/").get(getClothes).post(postClothing)

// WARNING: Prettier will format this line of code wrong. It needs to be concatinated to work.
router.route("/:id").get(getClothesById).put(updateClothing).delete(removeClothing)


module.exports = router;

