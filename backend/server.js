const express = require("express");
const connectDB = require("./config/connectDB");
// const router = require ('./routes/');
const userEmployer = require('./routes/EmployerRouter');
const userJobSeeker = require('./routes/RegisterRouter');


const app = express();
app.use(express.json());

// app.use('/auth',require('./routes/RegisterRouter'));
 
// require("dotenv").config({ path: "./config/.env" });
connectDB();
app.use('/Employer' , userEmployer) ;
app.use('/JobSeeker' , userJobSeeker) ;

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server is runnig on PORT ${PORT}`)
);
