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
    
    app.post("/upload",upload.single('Product'),(req,res)=>{
        res.json({
            success:1,
            image_url:`http://localhost:${port}/images/${req.file.filename}`
        })
    })
  
// database model
    const Product=mongoose.model("Product",{
        id:{
            type:Number,
            require:true,
        },
        name:{
            type:String,
            require:true,
        },
        image:{
            type:String,
            require:true,
        },
        category:{
            type:String,
            require:true,
        },
        new_price:{
            type:Number,
            require:true,
        },
        old_price:{
            type:Number,
            require:true,
        },
        date:{
            type:Date,
            default:Date.now,
        },
        available:{
            type:Boolean,
            default:true,
        },


    })    



    app.post("/addproduct",async (req,res)=>{
        const product=new Product({
            id:req.body.id,
            name:req.body.name,
            image:req.body.image,
            catogary:req.body.category,
            new_price:req.body.new_price,
            old_price:req.body.old_price,

        })
        await product.save()
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