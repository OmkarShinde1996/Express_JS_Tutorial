const router = require('express').Router()
const apiKeyMiddleware = require('../middlewares/api_key')

// router.use(apiKeyMiddleware)//using this you can set middleware at router level

router.get('/', (req,res) => {
    // res.sendFile(path.resolve(__dirname) + '/public/index.html') //In case files need to send from public folder
    res.render('index', {title:'Home Page'}) //In case files need to be rendered from views folder
})

router.get('/about', (req,res) => {
    // res.sendFile(path.resolve(__dirname) + '/public/about.html') //In case files need to send from public folder
    res.render('about', {title:'About Page'}) //In case files need to be rendered from views folder
})

router.get('/download', (req,res) => {
    res.download(path.resolve(__dirname) + '/public/about.html')
})

router.get('/api/products', apiKeyMiddleware, (req,res) => { //You can pass multiple middleware in array like [apiKeyMiddleware,apiKeyMiddleware,apiKeyMiddleware]
    res.json([
        {
            id:'123',
            name:'Chrome'
        },
        {
            id:'124',
            name:'Firefox'
        }
    ])
})


module.exports = router