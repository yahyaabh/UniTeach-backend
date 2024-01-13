import express from "express";
import dotenv from "dotenv";
import client from "./db/connect.js";
import bodyParser from "body-parser";
import studentsRouter from "./routes/studentsRouter.js";
import teachersRouter from "./routes/teachersRouter.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

//body parser api
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//my two routes
app.use("/teachers",teachersRouter)
app.use("/students",studentsRouter)

app.listen(port , () => {
    console.log(`the app is listening on ${port}`)
})
