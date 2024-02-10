import express from "express";
const usersRouter = express.Router();
import { loginUser, registerUser, addNeeds,addSkills, getInfo, searchNeeds, searchSkills } from "../controllers/usersCont.js";

usersRouter.post("/register",registerUser)
usersRouter.post("/login",loginUser)
usersRouter.post("/add/needs", addNeeds)
usersRouter.post("/add/skills", addSkills)
usersRouter.post("/search/needs", searchNeeds)
usersRouter.post("/search/skills", searchSkills)
usersRouter.post("/getInfo", getInfo)

export default usersRouter;