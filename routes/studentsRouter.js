import express from "express";
const studentsRouter = express.Router();
import { loginStudent, registerStudent } from "../controllers/studentsCont.js";

studentsRouter.post("/register",registerStudent)
studentsRouter.get("/login",loginStudent)

export default studentsRouter;