const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {type:String,unique:true},
    grade_id : String,
    subjects:[JSON],
});

const Student = mongoose.model("Student",
    StudentSchema
);

module.exports = Student;