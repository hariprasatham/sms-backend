const { create, getAll, getById, updateById, deleteById} = require("../repository/classRepository")

class ClassService{
    async createClass( data ){
        return await create(data);
    }
    async getAllClass( data ){
        return await getAll();
    }
    async getClassById(id){
        return await getById(id)
    }
    async updateClassById(id, data){
        return await updateById(id, data)
    }
    async deleteClassById(id){
        return await deleteById(id)
    }
}

    module.exports = new ClassService();