const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gradeSchema = new Schema({
    name: {type:String, unique:true},
    subjects: [JSON],
});

const Grade = mongoose.model("Grade",
    gradeSchema
);

module.exports = Grade;