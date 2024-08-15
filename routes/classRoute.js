const {Router} = require("express")
const ClassController = require("../controllers/classController")


const classRoutes = Router();
const classController = new ClassController();


classRoutes.post("/", classController.createClass)
classRoutes.get("/", classController.getClasses)
classRoutes.get("/:id", classController.getClassById)
classRoutes.put("/:id", classController.updateClassById)
classRoutes.delete("/:id", classController.deleteClassById)


module.exports = classRoutes