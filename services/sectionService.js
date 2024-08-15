const { create, getAll, getById, updateById, deleteById} = require("../repository/sectionRepository")

class SectionService{
    async createSection( data ){
        return await create(data);
    }
    async getAllSection( data ){
        return await getAll();
    }
    async getSectionById(id){
        return await getById(id)
    }
    async updateSectionById(id, data){
        return await updateById(id, data)
    }
    async deleteSectionById(id){
        return await deleteById(id)
    }
}

    module.exports = new SectionService();