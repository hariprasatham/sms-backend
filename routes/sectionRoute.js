const {Router} = require("express")
const SectionController = require("../controllers/sectionController")


const sectionRouter = Router();
const sectionController = new SectionController();


SectionController.post("/", sectionController.createSection)
SectionController.get("/", sectionController.getSections)
SectionController.get("/:id", sectionController.getSectionById)
SectionController.put("/:id", sectionController.updateSectionById)
SectionController.delete("/:id", sectionController.deleteSectionById)


module.exports = departmentRoutes