const { create, getAll, getById, updateById, deleteById} = require("../repository/teacherRepository")

class TeacherService{
    async createTeacher( data ){
        return await create(data);
    }
    async getAllTeacher( data ){
        return await getAll();
    }
    async getTeacherById(id){
        return await getById(id)
    }
    async updateTeacherById(id, data){
        return await updateById(id, data)
    }
    async deleteTeacherById(id){
        return await deleteById(id)
    }
}

    module.exports = new TeacherService();