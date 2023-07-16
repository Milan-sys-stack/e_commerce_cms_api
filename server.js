import express from 'express'
const app = express ()
import dotenv from "dotenv"
import morgan from "morgan";
import cors from "cors";
import { mongoConnect } from './src/config/mongoConfig.js';

const PORT = process.env.PORT || 8000
dotenv.config()
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


mongoConnect()
app.get("/", (req,res)=>{
    res.json({
        status: "success",
        message: "Server is live",

    });
})


app.listen(PORT, error=>{
    error? console.log(error):
    console.log('server is running at http://localhost:');
});
