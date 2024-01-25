import express from "express";
const usersRouter = express.Router();
import { loginUser, registerUser, addNeeds, searchUsers,addSkills, getInfo } from "../controllers/usersCont.js";

usersRouter.post("/register",registerUser)
usersRouter.post("/login",loginUser)
usersRouter.post("/add/needs", addNeeds)
usersRouter.post("/add/skills", addSkills)
usersRouter.get("/search", searchUsers)
usersRouter.post("/getInfo", getInfo)

export default usersRouter;