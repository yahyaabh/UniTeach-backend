import express from "express"
const teachersRouter = express.Router();
import {registerTeacher,loginTeacher} from "../controllers/teachersCont.js"

teachersRouter.post("/register", registerTeacher)
teachersRouter.get("/login", loginTeacher)

export default teachersRouter;