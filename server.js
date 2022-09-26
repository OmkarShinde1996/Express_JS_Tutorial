const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')
const app = express()
const mainRouter = require('./routes/index')
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
// app.use(apiKeyMiddleware)//using this you can set middleware at global level (need to import)
app.use(express.static('public'))//using this you can set middleware at global level

app.use(mainRouter)//using this you can set middleware at global level



app.listen(PORT, () => console.log(`Server is started and listening on port ${PORT}`))
