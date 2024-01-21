import express from "express";
const usersRouter = express.Router();
import { loginUser, registerUser, addNeeds, searchUsers,addSkills } from "../controllers/usersCont.js";

usersRouter.post("/register",registerUser)
usersRouter.post("/login",loginUser)
usersRouter.post("/add/needs", addNeeds)
usersRouter.post("/add/skills", addSkills)
usersRouter.get("/search", searchUsers)

export default usersRouter;