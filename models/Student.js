const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
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
    "admission_date": {
        type: String,
    },
    "class_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    },
})

module.exports = mongoose.model("Student", StudentSchema)