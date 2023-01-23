const Student = require("./model");
const Grade = require("../grade/model");


const createNewStudent = async (data) =>{
    try {
        const {name, grade_id } = data;
        // checking if subject already exists
        const exsitingSubject = await Student.findOne({name});
        if(exsitingSubject){
            throw Error("Student with the provided name already exists");
        }
        // fetch subjects in that particular grade
        const grade = await Grade.findOne({"_id":grade_id});
        if (!grade){
            throw Error("grade does not exist");
        }
        const subjects = grade.subjects
        
        const newStudent = new Student({ name, grade_id, subjects });
        const createdStudent = await newStudent.save();
        return createdStudent;
    
    } catch (error) {
        throw error;
    }
}


module.exports = { createNewStudent};