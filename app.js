


import express from 'express'
import { connectDB } from './database/dbConnection.js'
import errorHandlerMiddleware from './src/middleware/error-handler.js'
import notFound from './src/middleware/not-found.js'
import productRouter from './src/modules/product.Router.js'
import * as dotenv from 'dotenv' 
dotenv.config()
const app = express()

connectDB()


app.use(express.json())
app.use(productRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(notFound)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))