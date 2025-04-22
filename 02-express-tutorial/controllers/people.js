const { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

const createPeople = (req, res) => {
    const { name } = req.body;
    console.log(req.body);
    console.log(res);
    if(!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name values'});
    }
    res.status(201).send({ success: true, person: name });
}

const createPersonPostman = (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({
            success: false,
            msg: 'Pls provide name value'
        })
    }
    res.status(201).json({ success: true , data: [...people, name] });
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
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
}

module.exports = {
    getPeople,
    createPeople,
    createPersonPostman,
    updatePerson,
    deletePerson,
};