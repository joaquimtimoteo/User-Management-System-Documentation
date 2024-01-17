const express= require("express");
const dotenv=require("dotenv");
const morgan= require("morgan");
const bodyparser= require("body-parser");
const path=require("path");

const connectDB=require('./server/database/connetions');

const app= express();

dotenv.config({path:'config.env'})

const PORT= process.env.PORT ||8010

app.use(morgan('tiny'));

connectDB()

app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine", "ejs");

app.use('/CSS', express.static(path.resolve(__dirname, "assets/CSS")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/',require('./server/routes/router'));
app.listen(PORT,()=>{
    console.log(`Server is Running on http://localhost:${PORT}`)});