
const DEFINED_API_KEY = process.env.DEFINED_API_KEY

const api_key = (req,res,next) => {
    const userProvidedApiKey = req.query.api_key
    if(userProvidedApiKey && (userProvidedApiKey === DEFINED_API_KEY)){
        next()
    }else{
        res.json({message: 'Not Authorized'})
    }
    // console.log(DEFINED_API_KEY);
    console.log(req.query.api_key);
}

module.exports = api_key