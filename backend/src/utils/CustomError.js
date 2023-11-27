class CustomError extends Error{

    constructor(message, statusCode){
        super(`Error: ${message} with status code ${statusCode}`)
        this.statusCode = statusCode
    }

    log(){
        console.error(`an Error occured: \n ${this.stack}`)
    }
}

module.exports = CustomError