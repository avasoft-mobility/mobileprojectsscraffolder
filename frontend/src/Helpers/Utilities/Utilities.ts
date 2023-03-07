class Exception {
    handleException = (error:Error) => {
        console.log(error.message)
    }
}

const exceptionHandlingObj = new Exception();

export default exceptionHandlingObj;