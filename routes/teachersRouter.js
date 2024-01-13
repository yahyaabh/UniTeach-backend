import express from "express"
const teachersRouter = express.Router();

teachersRouter.get("/", (req,res) => {
    res.send("the teachers router")
})

export default teachersRouter;