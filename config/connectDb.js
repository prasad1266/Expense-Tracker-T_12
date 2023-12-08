const express=require('express')
const mongoose=require('mongoose')
const app =  express();

mongoose.connect('mongodb://localhost:27017/expenseApp');
const db = mongoose.connection;

db.on("error",console.error.bind(console,"error connecting to database"));
db.once('open',function(){
    console.log('connected to db:mongoDB');
})
module.exports = db;


//mongodb+srv://yogeshpatil892000:Yogesh@123@cluster0.bmfnkhb.mongodb.net/expenseApp
//mongodb+srv://yogeshpatil892000:Yogesh@123@cluster0.bmfnkhb.mongodb.net/Cluster0?retryWrites=true&w=majority
//mongodb://localhost:27017/StudentDb
//mongodb://localhost:27017/expenseApp