const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger');
const autorize = require('./autorize');
// req => middleware => res

// 1. use vs route
// 2. options => use own / express / third party

// a. setting own middlewares
// b. built-in: express docs: ex's are express.static(), express.json()

// app.use([logger, authorize])

// app.use(express.static('./public'));

// third party middleware
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})

app.get('/api/products', (req, res) => {
    console.log(req.user)
    res.send('products');
})

app.get('/api/items', [autorize, logger], (req, res) => {
    // console.log(req.user)
    res.send('items');
})

app.listen(5000, (req, res) => {
    console.log('Server is listening in port 5000...');
})
