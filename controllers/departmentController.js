const departmentService = require("../services/departmentService")

class DepartmentController{
   
    async createDepartment (req, res, next){
        try {
            const response = await departmentService.createDepartment(req.body)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getDepartments (req, res, next){
        try {
            const response = await departmentService.getAllDepartment()
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getDepartmentById (req, res, next){
        try {
            const response = await departmentService.getDepartmentById(req.params.id)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async updateDepartmentById (req, res, next){
        try {
            const response = await departmentService.updateDepartmentById(req.params.id, req.body)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async deleteDepartmentById (req, res, next){
        try {
            const response = await departmentService.deleteDepartmentById(req.params.id)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = DepartmentController