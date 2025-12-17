const express = require("express");
const studentsController = require("../controllers/students.controller");

const router = express.Router();

router.get("/", studentsController.getStudents);
router.get("/:id", studentsController.getStudentById);
// router.put
// router.post
// router.delete

module.exports = router;
