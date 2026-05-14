const express = require('express');

const router = express.Router();

let students = [];

router.get('/', (req, res) => {
    res.json(students);
});

router.post('/add', (req, res) => {

    const student = req.body;

    students.push(student);

    res.json({
        message: "Student Added"
    });
});

router.delete('/delete/:id', (req, res) => {

    const id = req.params.id;

    students = students.filter(student => student.id != id);

    res.json({
        message: "Student Deleted"
    });
});

module.exports = router;