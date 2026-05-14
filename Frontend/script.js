const API = "http://localhost:3000/students";

async function loadStudents() {
    const res = await fetch(API);
    const data = await res.json();

    const list = document.getElementById("studentList");
    list.innerHTML = "";

    data.forEach(student => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${student.id} - ${student.name} - ${student.course}
            <button onclick="deleteStudent('${student.id}')">Delete</button>
        `;

        list.appendChild(li);
    });
}
async function addStudent() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name, course })
    });



    loadStudents();
}

async function deleteStudent(id) {
    await fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE"
    });

    loadStudents();
}

function searchStudent() {
    let input = document.getElementById("search").value.toLowerCase();

    let listItems = document.querySelectorAll("#studentList li");

    listItems.forEach(item => {
        let text = item.innerText.toLowerCase();

        if (text.includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

loadStudents();