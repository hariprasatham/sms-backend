const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({
    "first_name": {
        type: String,
        required: true
    },
    "last_name": {
        type: String,
    },
    "dob": {
        type: Date,
    },
    "gender": {
        type: String,
    },
    "address": {
        type: String,
    },
    "email": {
        type: String,
    },
    "phone_number": {
        type: String,
    },
    "hire_date": {
        type: String,
    },
    "department_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    },
})


module.export= mongoose.model("Teacher", TeacherSchema)