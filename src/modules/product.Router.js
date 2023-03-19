

import express from 'express'
import {getAllProductsStatic,getAllProducts} from './product.controller.js'

const productRouter = express.Router()



productRouter.get('/getProducts', getAllProductsStatic)
productRouter.get('/getAllProducts', getAllProducts)


export default productRouter