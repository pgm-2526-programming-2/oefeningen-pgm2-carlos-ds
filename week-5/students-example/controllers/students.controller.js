const fs = require("fs");
const path = require("path");

function getStudentData() {
  const studentsFile = fs.readFileSync(
    path.join(__dirname, "..", "models", "students.json")
  );
  return JSON.parse(studentsFile);
}

function writeStudentData(students) {
  fs.writeFileSync(
    path.join(__dirname, "..", "models", "students.json"),
    JSON.stringify(students)
  );
}

function getStudents(req, res) {
  const students = getStudentData();
  return res.status(200).json(students);
}

function getStudentById(req, res) {
  const id = req.params.id;
  const students = getStudentData();
  const student = students.find((student) => student.id === id);
  return res.status(200).json(student);
}

function updateStudent(req, res) {
  // ...
}

function addStudent(req, res) {
  // ...
}

function removeStudent(req, res) {
  // ...
}

module.exports = {
  getStudents,
  getStudentById,
  updateStudent,
  addStudent,
  removeStudent,
};
