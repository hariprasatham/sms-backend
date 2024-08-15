const Class = require("../models/Class")

const create = async(data)=>{
    return await Class.create(data)
}

const getAll = async()=>{return await Class.find({})}

const getById = async(id)=>{return await Class.findById(id)}

const deleteById = async(id)=>{return await Class.findByIdAndDelete(id).exec()}

const updateById = async(id, data)=>{return await Class.findByIdAndUpdate(id, data, {new: true}).exec()}


module.exports = { create, getAll, getById, deleteById, updateById }