const Department = require("../models/Department");

const create = async(data)=>{
  return await Department.create(data)
}

const getAll = async()=>{return await Department.find({})}

const getById = async(id)=>{return await Department.findById(id)}

const deleteById = async(id)=>{return await Department.findByIdAndDelete(id).exec()}

const updateById = async(id, data)=>{return await Department.findByIdAndUpdate(id, data, {new: true}).exec()}

module.exports = { create, getAll, getById, deleteById, updateById };
