const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

// static assets
app.use(express.static('./methods-public1'))

// // parse form data
app.use(express.urlencoded({ extended: false }));

// // parse json
app.use(express.json())

app.use('/api/people', people);

app.use('/login', auth);

// app.all('*', (req, res) => {
//     res.status(404).send('resource not found !!!');
// })

app.listen(5000, (req, res) => {
    console.log('Server is listening in port 5000...');
})