
const express = require('express');
const router = express.Router();
const { people } = require('../data');

router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

router.post('/', (req, res) => {
    const { name } = req.body;
    console.log(req.body);
    console.log(res);
    if(!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name values'});
    }
    res.status(201).send({ success: true, person: name });
    res.status(201).send("helo wrold");
})

router.post('/postman', (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({
            success: false,
            msg: 'Pls provide name value'
        })
    }
    res.status(201).json({ success: true , data: [...people, name] });
})

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

module.exports = router;
