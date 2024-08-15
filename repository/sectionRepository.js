const Section = require("../models/Section")

const create = async(data)=>{
    return await Section.create(data)
  }
  
  const getAll = async()=>{return await Section.find({})}
  
  const getById = async(id)=>{return await Section.findById(id)}
  
  const deleteById = async(id)=>{return await Section.findByIdAndDelete(id).exec()}
  
  const updateById = async(id, data)=>{return await Section.findByIdAndUpdate(id, data, {new: true}).exec()}

module.exports = { create, getAll, getById, deleteById, updateById }