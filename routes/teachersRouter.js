import express from "express"
const teachersRouter = express.Router();
import {registerTeacher,loginTeacher, addSkills} from "../controllers/teachersCont.js"

teachersRouter.post("/register", registerTeacher)
teachersRouter.get("/login", loginTeacher)
teachersRouter.post("/add", addSkills)

export default teachersRouter;