const express = require('express');
const { products } = require('./data');
const app = express();

// app.get('/', (req, res) => {
//     // res.json([{ name: 'susan' }, { name : 'john' }]);
//     res.json(products);
// })

// default 404 response from express when the resource is not found

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">products</a>');
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, image, name} = product;
        return {id, image, name};
    })
    res.send(newProducts);
    // res.send(products);
})

// using route parameters or route params or placeholders
app.get('/api/products/:productID', (req, res) => {
    console.log('productID', req.params.productID);
    const singleProduct = products.find((product) => (
        product.id === +req.params.productID
    ))
    if(!singleProduct) {
        res.send('Product does not exist!!!');
    }
    res.send(singleProduct);
})

// : are route parameter or placehoders
app.get('/api/products/:productID/reviews/:reviewsID', (req, res) => {
    console.log(req.params);
    res.send("Hello world!!!");
})

app.listen( 5000, (req, res) => {
    console.log('server is listening in port 5000...');
})