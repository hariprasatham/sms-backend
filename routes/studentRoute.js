const {Router} = require("express")
const StudentController = require("../controllers/studentController")


const studentRoutes = Router();
const studentController = new StudentController();


studentRoutes.post("/", studentController.createStudent)
studentRoutes.get("/", studentController.getAllStudents)
studentRoutes.get("/:id", studentController.getStudentById)
studentRoutes.put("/:id", studentController.updateStudentById)
studentRoutes.delete("/:id", studentController.deleteStudentById)


module.exports = studentRoutes