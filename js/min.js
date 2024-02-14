"use strict";

let students = JSON.parse(localStorage.getItem("students")) || [
  {
    id: 18804,
    fristName: "Ulug'bek",
    lastName: "Eshnazarov",
    mdy: "08-09-2024",
    locations: "O'zbekiston",
    regions: "Qashqadaryo",
    positions: "Full Stack Developer",
    doesWork: "Yes",
  },
  {
    id: 15664,
    fristName: "Salmonbek",
    lastName: "Akbarov",
    mdy: "08-09-2024",
    locations: "O'zbekiston",
    regions: "Farg'ona",
    positions: "React Developer",
    doesWork: "Yes",
  },
  {
    id: 17234,
    fristName: "Azimjon",
    lastName: "Pulatov",
    mdy: "08-09-2024",
    locations: "O'zbekiston",
    regions: "Farg'ona",
    positions: "Beckend Developer",
    doesWork: "Now",
  },
];

const studentEditing = null;

let tBody = document.querySelector(".tbody");
let search = document.getElementById("search");
let studentId = document.getElementById("yourid");
let studentFristName = document.querySelector(".student-fristname");
let studentLastName = document.querySelector(".student-lastname");
let studentDate = document.querySelector(".student-date");
let studentLocations = document.getElementById("locations");
let studentPositions = document.getElementById("positions");
let studentGroup = document.getElementById("groups");
let userInp = document.querySelector(".usernameinp");
let checkBox = document.getElementById("checkbox");
// update class id
// const editLastName = document.getElementById("edit-lastname");
// const editFristName = document.getElementById("edit-fristname");
// const editDate = document.getElementById("edit-date");
// const editId = document.getElementById("edit-id");
// const editCheckbox = document.getElementById("edit-checkbox");
// const editUsername = document.getElementById("edit-username");
// const editLocations = document.getElementById("edit-locations");
// const editGroups = document.getElementById("edit-groups");
// const editPositions = document.getElementById("edit-positions");
// const updateBtn = document.getElementById("update-btn");

// let studentGroup = document.getElementById("");
// ============ btn add, save, edit, delete, =========== //
let saveStudents = document.querySelector(".save-students");
let addBtn = document.querySelector(".add-btn");
// ============ btn add, save, edit, delete, =========== //
function studentFunc(studentDate) {
  let str = "";
  studentDate.forEach((student) => {
    str += `
    <tr class="tr">
        <td>${student.id}</td>
        <td>${student.fristName}</td>
        <td>${student.lastName}</td>
        <td>${student.mdy}</td>
        <td>${student.locations}</td>
        <td>${student.positions}</td>
        <td>${student.doesWork ? "Yes" : "Now"}</td>
        <td> 
        <button class="btn btn-success" data-bs-toggle="modal"
        data-bs-target="#editModal">
            <i class="fa-solid fa-pen"></i>
        </button>
        <button class="btn btn-danger" onClick="deleteStudents()">
            <i class="fa-solid fa-trash"></i>
        </button>
        </td>
    </tr>
    `;
    tBody.innerHTML = str;
  });
}

studentFunc(students);

saveStudents.addEventListener("click", (e) => {
  e.preventDefault();
  let newStudents = {
    id: studentId.value,
    fristName: studentFristName.value,
    lastName: studentFristName.value,
    mdy: studentDate.value,
    locations: studentLocations.value,
    positions: studentPositions.value,
    doesWork: checkBox.checked,
  };
  let newStudent = [...students, newStudents];
  studentFunc(newStudent);
  localStorage.setItem("students", JSON.stringify(newStudent));
});

// function deleteStudents(studentId) {
//   if (confirm("Are You sure you want to delete this student")) {
//     let delData = JSON.parse(localStorage.getItem("students"));
//     let userStudents = delData.filter(
//       (student) => student.id !== studentId.value
//     );
//     studentFunc(userStudents);
//     localStorage.setItem("students", JSON.stringify(userStudents));
//   }
// }

// deleteStudents(studentId.value);

// function studentUpdate(studentId) {
//   const student = JSON.parse(localStorage.getItem("students"));
//   const studentEdit = student.find((student) => {
//     student.id !== studentId;
//   });
//   studentEditing = studentEdit;
//   editId.value = student.id;
//   editFristName.value = student.fristName;
//   editLastName.value = student.lastName;
//   editDate.value = student.mdy;
//   editLocations.value = student.locations;
//   editPositions.value = student.postions;
//   editCheckbox.checked = student.doesWork;
// }

// updateBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let studentId = studentEditing.id;
//   let studentUpdate = {
//     id: studentId,
//     fristName: editFristName.value,
//     lastName: editLastName.value,
//     mdy: editDate.value,
//     location: editLocations.value,
//     positions: editPositions.value,
//     group: editGroups.value,
//     doesWork: editCheckbox.checked,
//   };
// });

search.addEventListener("input", function (e) {
  let text = e.target.value.toLowerCase();
  let student = JSON.parse(this.localStorage.getItem("student"));
  let searchStudent = students.filter((student) => {
    student.fristName.toLowerCase().includes(text) ||
      student.lastName.toLowerCase().includes(text);
  });
  studentFunc(searchStudent);
});
