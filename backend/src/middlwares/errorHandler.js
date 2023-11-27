const CustomError = require('../utils/CustomError')
const errorHandler = async (error, req, res, next) => {

    let statusCode
    if(error instanceof CustomError){
        statusCode = error.statusCode
        error.log()
    }
    else{
        statusCode = 500
    }
    res.status(statusCode).send({success: false, message: error.message})
}

module.exports = errorHandler