const express = require("express");

//initialize router
const router = express.Router();

const userControllers = require("../controllers/users")

//get info
router.get("/", userControllers.getUser);

//params
router.get("/:id", userControllers.getById);

//create
router.post("/", userControllers.createUser);

//update
router.put("/:id", userControllers.updateUser);

//delete
router.delete("/:id", userControllers.deleteUser);

module.exports = router;