const teacherService = require("../services/teacherService")

class StudentController{
   
    async createTeacher (req, res, next){
        const data = req.body
        data.dob = new Date(req.body.dob);
        console.log(data)
        data.admission_date = new Date(req.body.admission_date);
        try {
            const response = await teacherService.createTeacher(data)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getAllTeachers (req, res, next){
        try {
            const response = await teacherService.getAllTeachers()
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getTeacherById (req, res, next){
        console.log("params", req.params)
        try {
            const response = await teacherService.getTeacherById(req.params.id)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async updateTeacherById (req, res, next){
        try {
            const response = await teacherService.updateTeacherById(req.params.id, req.body)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async deleteTeacherById (req, res, next){
        try {
            const response = await teacherService.deleteStudentById(req.params.id)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = StudentController