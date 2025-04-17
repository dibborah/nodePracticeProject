const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('user hits the resource');
    res.status(200).send('Home page');
})

app.get('/about', (req, res) => {
    console.log('user hits the resource');
    res.status(200).send('About page');
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found!!!</h1>');
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})

// get, post, put, delete: http verbs

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use: Responsible for middleware
// app.listen
