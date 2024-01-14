import express from "express";
const studentsRouter = express.Router();
import { loginStudent, registerStudent, addNeeds } from "../controllers/studentsCont.js";

studentsRouter.post("/register",registerStudent)
studentsRouter.get("/login",loginStudent)
studentsRouter.post("/add", addNeeds)

export default studentsRouter;