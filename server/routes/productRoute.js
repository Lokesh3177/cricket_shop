import express from 'express'

import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

import {listProducts,addProduct,removeProduct,singletProduct} from "../controllers/productController.js"
const productRouter=express.Router();

productRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct)
productRouter.post('/remove',adminAuth,removeProduct)
productRouter.post('/single',singletProduct)
productRouter.get('/list',listProducts)

export default productRouter;