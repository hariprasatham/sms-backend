const express = require("express")
const classRoutes = require("./classRoute")
const studentRoutes = require("./studentRoute")
const departmentRoutes = require("./departmentRoute")
const teacherRoutes = require("./teacherRoute")

const router = express.Router()


router.use("/class", classRoutes)
router.use("/student", studentRoutes)
router.use("/department", departmentRoutes)
router.use("/teacher", teacherRoutes)



module.exports = router