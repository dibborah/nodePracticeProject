const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json([{ name: 'susan' }, { name : 'john' }]);
})

app.listen(5000, (req, res) => {
    console.log('server is listening in port 5000...');
})   