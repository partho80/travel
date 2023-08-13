import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
} from "../controllers/userController.js";

const router = express.Router();

import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

// update tour
router.put("/:id", verifyUser, updateUser);

// delete tour
router.delete("/:id", verifyUser, deleteUser);

// get single tour
router.get("/:id", verifyUser, getSingleUser);

// get all tour
router.get("/", verifyAdmin, getAllUser);

export default router;
