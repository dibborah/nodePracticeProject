const express = require('express');
const app = express();
const { people } = require('./data');

// static assets
app.use(express.static('./methods-public1'))

// // parse form data
app.use(express.urlencoded({ extended: false }));

// // parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    console.log(req.body);
    console.log(res);
    if(!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name values'});
    }
    res.status(201).send({ success: true, person: name });
    res.status(201).send("helo wrold");
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({
            success: false,
            msg: 'Pls provide name value'
        })
    }
    res.status(201).json({ success: true , data: [...people, name] });
})

app.post('/login', (req, res) => {
    // console.log(req.body.name);
    const { name } = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(404).send('Please provide credentials!!!');
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((item) => item.id === Number(id));

    if(!person) {
        return res.status(400).json({
            success: false,
            msg: `No person with id ${id}`
        })
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })

    res.status(201).json({
        success: true,
        data: newPeople
    })
})

app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));

    if(!person) {
        return res.status(404).json({
            success: false,
            msg: `No person with id ${id}`
        })
    }

    const newPeople = people.filter((person) => person.id !== Number(id));
    res.status(201).json({
        success: true,
        data: newPeople
    })
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found !!!');
})

app.listen(5000, (req, res) => {
    console.log('Server is listening in port 5000...');
})