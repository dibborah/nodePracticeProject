// req => middleware => res
// When working with middlewares we need to pass it to the next middleware
// unless we are sending the request and terminating the request
// Either we terminate using send() or pass it to the next() middleware


const logger = (req, res, next) => {
    const method = req?.method;
    const url = req?.url;
    const time = new Date()?.getFullYear();
    console.log(method, url, time);
    // res.send("Testing"); // Terminating self
    next();
}


// module.exports = { logger };
module.exports = logger;