import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js';
import connectDB from './config/db.js'; 

const port =process.env.PORT || 5000;

connectDB();

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.get('/api/products',(req,res)=>{
    res.json(products);
});

app.get('/api/products/:id',(req,res)=>{
    const productId = parseInt(req.params.id, 10);
    const product = products.find((p)=>p._id===productId);
    res.json(product);
});

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
});
    