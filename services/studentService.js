const { create, getAll, getById, updateById, deleteById} = require("../repository/studentRepository")
const moment = require("moment")
class StudentService{
    async createStudent( data ){
        data.dob = moment(data.dob)
        data.dob = moment(data.dob)
        return await create(data);
    }
    async getAllStudents( data ){
        return await getAll();
    }
    async getStudentById(id){
        return await getById(id)
    }
    async updateStudentById(id, data){
        return await updateById(id, data)
    }
    async deleteStudentById(id){
        return await deleteById(id)
    }
}

    module.exports = new StudentService();