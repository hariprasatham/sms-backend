const sectionService = require("../services/sectionService")

class SectionController{
   
    async createSection (req, res, next){
        try {
            const response = await sectionService.createSection(req.body)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getSections (req, res, next){
        try {
            const response = await sectionService.getAllSection()
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getSectionById (req, res, next){
        console.log("params", req.params)
        try {
            const response = await sectionService.getSectionById(req.params.id)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async updateSectionById (req, res, next){
        try {
            const response = await sectionService.updateSectionById(req.params.id, req.body)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async deleteSectionById (req, res, next){
        try {
            const response = await sectionService.deleteSectionById(req.params.id)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = SectionController