const { create, getAll, getById, updateById, deleteById} = require("../repository/departmentRepository")

class DepartmentService{
    async createDepartment( data ){
        return await create(data);
    }
    async getAllDepartment( data ){
        return await getAll();
    }
    async getDepartmentById(id){
        return await getById(id)
    }
    async updateDepartmentById(id, data){
        return await updateById(id, data)
    }
    async deleteDepartmentById(id){
        return await deleteById(id)
    }
}

    module.exports = new DepartmentService();