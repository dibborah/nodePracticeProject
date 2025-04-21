const express = require('express');
const app = express();
const logger = require('./logger');
const autorize = require('./autorize');

// Pass logger in all the req's all at once
// In express order of code matters
// Therefore all the app.use functions and all the middlewares at the top of the documents


// passing multiple middle all at once
// and here no path is passed
// app.use([logger, autorize]);

// They will be executed in order since express and js executes in order
// app.use([autorize, logger]);

// This middle function will only be executed if the base of the url matches its passed url
// app.use('/api', logger);

// With path the middle will be applied to all
// app.use(logger);

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})

app.get('/api/products', (req, res) => {
    // console.log(req.user)
    res.send('products');
})

app.get('/api/items', [autorize, logger], (req, res) => {
    console.log(req.user)
    res.send('items');
})

app.listen(5000, (req, res) => {
    console.log('Server is listening in port 5000...');
})

