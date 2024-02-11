import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.route.js"
import { errorHandler, notFoundError } from "./middlewares/error-handler.mjs";

const app = express();
const PORT = process.env.PORT || 9090;
const hostname = "127.0.0.1";


mongoose.connect("mongodb://localhost:27017/authenticationApp", { family: 4})
    .then(() => {
        console.log("DataBase connected");
    })
    .catch((e) =>{
        console.log(e);
    });


app.use(cors());
app.use(express.json());
    
app.use("/users",userRouter);


app.use(notFoundError)
app.use(errorHandler)

app.listen(PORT, hostname, () => {
    console.log(`server is running on http://${hostname}:${PORT}`);
})

