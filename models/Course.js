const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
    course_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        required: true
    },
    department_id: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model("Course", CourseSchema)