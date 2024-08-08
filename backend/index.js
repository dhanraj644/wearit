const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const app=express();
const port=4000;


app.use(express.json());
app.use(cors())

// mongoose database connection
    mongoose.connect("mongodb://localhost:27017/E-comerce");

// image stotage usin multer

    const storage =multer.diskStorage({
        destination: './upload/images',
        filename :(req,file,cb)=>{
            return cb(null,`${file.filename}_${Date.now()}${path.extname(file.originalname)}`)
        }
    })

    const upload =multer({storage:storage})
// Creating upload  Endpoint for image
    app.use('/images',express.static('upload/images'))
    
    app.post("/upload",upload.single('product'),(req,res)=>{
        res.json({
            success:1,
            image_url:`http://localhost:${port}/images/${req.file.filename}`
        })
    })

// Api creation
    app.get("/",(req,res)=>{
        res.send("Express is running")
    })
app.listen(port,(error)=>{
    if(!error)
    {
    console.log(`port is running in  ${port}`)
    }
    else{
        console.log("Error :"+error)
    }
})