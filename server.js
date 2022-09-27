const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')
const app = express()
const mainRouter = require('./routes/index')
const productsRouter = require('./routes/products')
const ErrorHandler = require('./errors/ErrorHandler')
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
// app.use(apiKeyMiddleware)//using this you can set middleware at global level (need to import)
app.use(express.static('public'))//using this you can set middleware at global level
app.use(express.json())


app.use(mainRouter)//using this you can set middleware at global level
app.use(productsRouter)

//Below is the immportanat middleware for error handeling
app.use((err, req, res, next)=> {
    if(err instanceof ErrorHandler){
        res.status(err.status).json({
            error: {
                message:err.message,
                status:err.status
            }
        })
    }else{
        res.status(500).json({
            error: {
                message:err.message,
                status:err.status
            }
        })
    }
    // next()
})


app.listen(PORT, () => console.log(`Server is started and listening on port ${PORT}`))
