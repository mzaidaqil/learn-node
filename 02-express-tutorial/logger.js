
    // req => middleware => res

//midleware, its not practical to copy and paste into all route

const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const date = new Date().getFullYear();
    console.log(method, url, date);
    next()
}

module.exports = logger;



