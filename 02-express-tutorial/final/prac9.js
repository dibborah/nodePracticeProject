const express = require('express');
const app = express();
const logger = require('./logger');

// Pass logger in all the req's all at once
// In express order of code matters
// Therefore all the app.use functions and all the middlewares at the top of the documents


// This middle function will only be executed if the base of the url matches its passed url
app.use('/api', logger);

// With path the middle will be applied to all
// app.use(logger);

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})


app.get('/api/products', (req, res) => {
    res.send('products');
})

app.get('/api/items', (req, res) => {
    res.send('items');
})

app.listen(5000, (req, res) => {
    console.log('Server is listening in port 5000...');
})