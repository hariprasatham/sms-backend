const Student = require("../models/Student")

const create = async(data)=>{
    return await Student.create(data)
  }
  
  const getAll = async()=>{return await Student.find({}).populate({path: "class_id", select: "class_name"})}
  
  const getById = async(id)=>{return await Student.findById(id)}
  
  const deleteById = async(id)=>{return await Student.findByIdAndDelete(id).exec()}
  
  const updateById = async(id, data)=>{return await Student.findByIdAndUpdate(id, data, {new: true}).exec()}


module.exports = { create, getAll, getById, deleteById, updateById }