const {Router} = require("express")
const DepartmentController = require("../controllers/departmentController")


const departmentRoutes = Router();
const departmentController = new DepartmentController();


departmentRoutes.post("/", departmentController.createDepartment)
departmentRoutes.get("/", departmentController.getDepartments)
departmentRoutes.get("/:id", departmentController.getDepartmentById)
departmentRoutes.put("/:id", departmentController.updateDepartmentById)
departmentRoutes.delete("/:id", departmentController.deleteDepartmentById)


module.exports = departmentRoutes