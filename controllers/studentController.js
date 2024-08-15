const studentService = require("../services/studentService")

class StudentController{
   
    async createStudent (req, res, next){
        try {
            const response = await studentService.createStudent(req.body)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getAllStudents (req, res, next){
        try {
            const response = await studentService.getAllStudents()
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getStudentById (req, res, next){
        console.log("params", req.params)
        try {
            const response = await studentService.getStudentById(req.params.id)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async updateStudentById (req, res, next){
        try {
            const response = await studentService.updateStudentById(req.params.id, req.body)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async deleteStudentById (req, res, next){
        try {
            const response = await studentService.deleteStudentById(req.params.id)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = StudentController