import express from "express";
const studentsRouter = express.Router()

studentsRouter.get("/", (req,res) => {
    res.send("the students router")
})

export default studentsRouter;