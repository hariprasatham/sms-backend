const mongoose = require("mongoose");

const SectionSchema = mongoose.Schema({
    "section_name": {
        type: String,
        required: true
    }
})



module.exports = mongoose.model("Section", SectionSchema)