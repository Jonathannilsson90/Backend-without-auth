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