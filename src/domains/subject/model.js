const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    name: {type:String, unique:true},
});

const Subject = mongoose.model("Subject",
    SubjectSchema
);

module.exports = Subject;