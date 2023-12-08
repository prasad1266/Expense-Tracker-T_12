const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
// import {db} from './config/connectDb';
const db= require("./config/connectDb")

//congig dot env file
dotenv.config();
//databse call


const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get("/",(request,response)=>{
    response.send("<h1>Hello From server</h1>");
});

const PORT = 5489 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`server Running ON port${PORT}`);
});

// mongodb+srv://yogeshpatil892000:<password>@cluster0.0brvige.mongodb.net/?retryWrites=true&w=majority