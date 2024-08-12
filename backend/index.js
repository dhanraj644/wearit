const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app=express();
const port=4000;


app.use(express.json());
app.use(cors())

// mongoose database connection
mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
.then(()=>{
console.log("database is connected")
})
.catch(errr=>{
console.log("database is not connected"+ errr)
});

// image stotage usin multer

    const storage =multer.diskStorage({
        destination: './upload/images',
        filename :(req,file,cb)=>{
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
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
  
// database model
    const Product = mongoose.model("Product",{
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
    app.post("/addproduct", async (req, res) => {
        try {
            // Fetch the last product by sorting by id in descending order and limit to 1
            const lastProduct = await Product.findOne().sort({ id: -1 }).exec();
            let id = 1; // Default id if no products are found
    
            if (lastProduct && typeof lastProduct.id === 'number') {
                id = lastProduct.id + 1;
            }
    
            // Validate the ID before creating the product
            if (isNaN(id) || id <= 0) {
                throw new Error("Invalid ID generated");
            }
    
            // Create a new product instance
            const product = new Product({
                id: id,
                name: req.body.name,
                image: req.body.image,
                category: req.body.category,  // Typo fixed from 'categary' to 'category'
                new_price: req.body.new_price,
                old_price: req.body.old_price,
            });
    
            // Save the product to the database
            await product.save();
            console.log("Product saved");
    
            // Send a response to the client
            res.json({
                success: true,
                name: req.body.name,
            });
        } catch (error) {
            console.error("Error saving product:", error.message);
            res.status(500).json({
                success: false,
                message: "An error occurred while saving the product",
            });
        }
    });

    
// remove product from database
    

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