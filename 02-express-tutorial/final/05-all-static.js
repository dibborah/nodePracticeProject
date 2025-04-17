const express = require('express');
const path = require('path');

const app = express();

// setup static and middleware
// express.static() is a built-in middleware
// static asset: asset that the server doesnot needs to change it
app.use(express.static('public'))

// #Note: template engines: Server side rendering or SSR

// Since index.html is a initial static assets
// we can just dump it into the public folder
// And automatically it will get imported
// index.html will serve as root so when the user hits the server
// the server will serve index.html by default
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// })

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found!!!</h1>');
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})