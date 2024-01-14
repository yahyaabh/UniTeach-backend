import express from "express"
const teachersRouter = express.Router();
import {registerTeacher,loginTeacher, addSkills, searchStudents} from "../controllers/teachersCont.js"

teachersRouter.post("/register", registerTeacher)
teachersRouter.get("/login", loginTeacher)
teachersRouter.post("/add", addSkills)
teachersRouter.get("/search", searchStudents)

export default teachersRouter;