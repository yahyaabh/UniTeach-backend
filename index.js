import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import usersRouter from "./routes/usersRouter.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

//body parser api
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

//my route
app.use("/",usersRouter)

app.listen(port , () => {
    console.log(`the app is listening on ${port}`)
})
