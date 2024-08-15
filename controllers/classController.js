const classService = require("../services/classService")

class ClassController{
   
    async createClass (req, res, next){
        try {
            const response = await classService.createClass(req.body)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getClasses (req, res, next){
        try {
            const response = await classService.getAllClass()
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getClassById (req, res, next){
        console.log("params", req.params)
        try {
            const response = await classService.getClassById(req.params.id)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async updateClassById (req, res, next){
        try {
            const response = await classService.updateClassById(req.params.id, req.body)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async deleteClassById (req, res, next){
        try {
            const response = await classService.deleteClassById(req.params.id)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = ClassController