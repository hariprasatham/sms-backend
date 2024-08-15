const {Router} = require("express")
const TeacherController = require("../controllers/teacherController")


const teacherRoutes = Router();
const teacherController = new TeacherController();


teacherRoutes.post("/", teacherController.createTeacher)
teacherRoutes.get("/", teacherController.getAllTeachers)
teacherRoutes.get("/:id", teacherController.getTeacherById)
teacherRoutes.put("/:id", teacherController.updateTeacherById)
teacherRoutes.delete("/:id", teacherController.deleteTeacherById)


module.exports = teacherRoutes