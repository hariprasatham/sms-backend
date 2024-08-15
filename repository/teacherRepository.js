const Teacher = require("../models/Teacher")

const create = async(data)=>{
    return await Teacher.create(data)
  }
  
  const getAll = async()=>{return await Teacher.find({})}
  
  const getById = async(id)=>{return await Teacher.findById(id)}
  
  const deleteById = async(id)=>{return await Teacher.findByIdAndDelete(id).exec()}
  
  const updateById = async(id, data)=>{return await Teacher.findByIdAndUpdate(id, data, {new: true}).exec()}

module.exports = { create, getAll, getById, deleteById, updateById }