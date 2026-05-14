const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running fine 🚀");
});

let students = [];

app.get("/students", (req, res) => {
    res.json(students);
});

app.post("/students", (req, res) => {
    const student = req.body;
    students.push(student);
    res.json({ message: "Student added successfully", student });
});

app.delete("/students/:id", (req, res) => {
    const id = req.params.id;
    students = students.filter(s => s.id !== id);
    res.json({ message: "Student deleted" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});