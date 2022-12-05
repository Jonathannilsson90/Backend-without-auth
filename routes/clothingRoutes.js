const express = require("express");
const router = express.Router();
const {
  getClothes,
  getClothesById,
  postClothing,
  updateClothing,
  removeClothing,
} = require("../controllers/clothingControllers");

router.route("/").get(getClothes).post(postClothing);

// WARNING: Prettier will format this line of code wrong. It needs to be concatinated to work.
router.get("/:id").get(getClothesById).put(updateClothing).delete(removeClothing);

module.exports = router;
