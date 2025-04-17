// API vs SSR

// with express 
// We will use mostly one of the two options

// 1. setup API: res.json() {does most heavylifting works}, api-json, send data
// 2. templates with SSR(whole html, css, js template from server): res.render, ssr template, res template

const express = require('express');
const { products } = require('./data');
const app = express();

// harding coded response data
// app.get('/', (req, res) => {
//     res.json([{ name: 'susan' }, { name: 'ravi' }]);
// })

app.get('/', (req, res) => {
    res.json(products);
})

app.listen(5000, (req, res) => {
    console.log('server is listening in port 5000......');
})