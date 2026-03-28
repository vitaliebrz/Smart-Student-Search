const students = [
    {
        nume: "Popescu",
        prenume: "Andrei",
        varsta: 16,
        telefon: "0712345678",
        mediaSemestru: 9.25,
        clasa: "10A",
    },
    {
        nume: "Ionescu",
        prenume: "Maria",
        varsta: 15,
        telefon: "0723456789",
        mediaSemestru: 8.7,
        clasa: "9B",
    },
    {
        nume: "Georgescu",
        prenume: "Vlad",
        varsta: 17,
        telefon: "0734567890",
        mediaSemestru: 7.95,
        clasa: "11C",
    },

    // 3 elevi cu ACELAȘI nume: "Radu"
    {
        nume: "Radu",
        prenume: "Ioana",
        varsta: 16,
        telefon: "0745678901",
        mediaSemestru: 9.6,
        clasa: "10B",
    },
    {
        nume: "Radu",
        prenume: "Mihai",
        varsta: 15,
        telefon: "0756789012",
        mediaSemestru: 8.15,
        clasa: "9A",
    },
    {
        nume: "Radu",
        prenume: "Elena",
        varsta: 17,
        telefon: "0767890123",
        mediaSemestru: 9.05,
        clasa: "11A",
    },

    {
        nume: "Dumitrescu",
        prenume: "Alex",
        varsta: 16,
        telefon: "0778901234",
        mediaSemestru: 7.4,
        clasa: "10C",
    },
    {
        nume: "Stan",
        prenume: "Bianca",
        varsta: 14,
        telefon: "0789012345",
        mediaSemestru: 8.95,
        clasa: "8A",
    },
    {
        nume: "Marin",
        prenume: "David",
        varsta: 15,
        telefon: "0790123456",
        mediaSemestru: 6.85,
        clasa: "9C",
    },
    {
        nume: "Petrescu",
        prenume: "Teodora",
        varsta: 16,
        telefon: "0701234567",
        mediaSemestru: 9.1,
        clasa: "10A",
    },
];

const notFilteredList = document.getElementById("list");
const nameInput = document.getElementById("inputNames");
const listOut = document.getElementById("filteredList");

students.forEach((student) => {
    const studentEl = document.createElement("div");
    studentEl.className = "student-card";
    studentEl.innerHTML = `
        <h2>${student.nume} ${student.prenume}</h2>
        <h3>Clasa: ${student.clasa}</h3>
        <p>Media: ${student.mediaSemestru}</p>
        <span>Telefon: ${student.telefon}</span>
        <span>Vârsta: <small>${student.varsta}</small></span>
    `;
    notFilteredList.appendChild(studentEl);
})

nameInput.addEventListener("input", () => {
    let inputValue = nameInput.value.trim().toLowerCase();

    if (inputValue === "") {
        listOut.innerHTML = "";
    } else {

        const matches = students.filter((student) => {
            const fullName = (student.nume + " " + student.prenume).toLowerCase()
            return fullName.includes(inputValue);
        });
        listOut.innerHTML = "";

        if (matches.length === 0) {
            listOut.innerHTML = `<span> În listă nu este așa elev</span>`
        } else {

            matches.forEach((match) => {
                const filteredStudent = document.createElement("div");

                filteredStudent.className = "filtered-student-card";
                filteredStudent.innerHTML = `
                <h2>${match.nume} ${match.prenume}</h2>
                <h3>Clasa: ${match.clasa}</h3>
                <p>Media: ${match.mediaSemestru}</p>
                <span>Telefon: ${match.telefon}</span>
                <span>Vârsta: <small>${match.varsta}</small></span>
            `;
                console.log(matches)

                listOut.appendChild(filteredStudent);
            })
        }
    }

})