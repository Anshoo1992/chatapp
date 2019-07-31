
class ResponseHandle {

    constructor() { }
    /**
     * @name throwError
     * @param {*} code 
     * @param {*} errorType 
     * @param {*} errorMessage
     * @description function to throw error message .
     */
    throwError = (code, errorType, errorMessage) => error => {
        if (!error) error = new Error(errorMessage || 'Default Error')
        error.code = code
        error.errorType = errorType
        throw error
    }

    /**
      * @name throwIf
      * @param {*}fn
      * @param {*} code 
      * @param {*} errorType 
      * @param {*} errorMessage
      * @description function to throw error message .
      */
    throwIf = (fn, code, errorType, errorMessage) => result => {
        if (fn(result)) {
            return throwError(code, errorType, errorMessage)()
        }
        return result
    }

    /**
     * @name sendSuccess
     * @param {*}res
     * @param {*} message 
     * @description function to send success response .
     */
    sendSuccess = (res, message) => data => {
        res.status(200).json({ type: 'success', message, data })
    }


    /**
     * @name sendError
     * @param {*}res
     * @param {*} message 
     * @param {*} status
     * @description function to send error response .
     */
    sendError = (res, status, message) => error => {
        res.status(status || error.status).json({
            type: 'error',
            message: message || error.message,
            error
        })
    }
}

module.exports = new ResponseHandle();