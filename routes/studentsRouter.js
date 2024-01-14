import express from "express";
const studentsRouter = express.Router();
import { loginStudent, registerStudent, addNeeds, searchTeachers } from "../controllers/studentsCont.js";

studentsRouter.post("/register",registerStudent)
studentsRouter.get("/login",loginStudent)
studentsRouter.post("/add", addNeeds)
studentsRouter.get("/search", searchTeachers)

export default studentsRouter;