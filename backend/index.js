const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const app=express();
const port=3000;


app.use(express.json());
app.use(cors())
app.listen(port,()=>{
    console.log(`port is running in  ${port}`)
})