import express from "express";
import {
  createUser,
  getUser,
  getID,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

//initialize router
const router = express.Router();


router.get("/", getUser);

router.post("/", createUser);

//params in route;
router.get("/:id", getID);

//delete
router.delete("/:id", deleteUser);

//update
router.patch("/:id", updateUser);

export default router;