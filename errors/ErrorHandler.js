class ErrorHandler {
    constructor(status, message){
        this.status = status
        this.message = message
    }

    static validationError(message='All fields are required'){
        return new ErrorHandler(422, message)
    }

    static notFoundError(message='Not Found'){
        return new ErrorHandler(404, message)
    }

    static InternalError(message='Internal Server Error'){
        return new ErrorHandler(500, message)
    }
}

module.exports = ErrorHandler


//now while throwing error write below

//Instead of below
//return throw error

//Write below
//next(ErrorHandler.InternalError()) //next(<errorClassName>.<ErrorMethodName>)