// multiple middleware functions

const authorize = (req, res, next) => {
    const { user } = req.query;
    if(user) {
        req.user = { name: user, id: 2 };
        next();
    } else {
        res.status(401).send('Unauthorized!!!');        
        next();
    }
}

module.exports = authorize;