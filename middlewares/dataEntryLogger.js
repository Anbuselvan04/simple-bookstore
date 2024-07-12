const bookDataEntryLogger = (request, response, next) =>{
    console.log(`New Data Added`);
    console.log(request.method);
    console.log(new Date());
    console.log(request.originalUrl);
    next()
}
``
module.exports = bookDataEntryLogger