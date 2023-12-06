const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config();



const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get("/",(request,response)=>{
    response.send("<h1>Hello From server</h1>");
});

const PORT = 5490 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`server Running ON port${PORT}`);
});