const Grade = require("./model");

const createNewGrade = async (data) =>{
    try {
        const { name , subjects } = data;
        // checking if Grade already exists
        const exsitingGrade = await Grade.findOne({name});
        if(exsitingGrade){
            throw Error("Grade with the provided name already exists");
        }
        
        const newGrade = new Grade({ name,subjects });
        const createdGrade = await newGrade.save();
        return createdGrade;
    
    } catch (error) {
        throw error;
    }
}

const updateGrade = async (id, body)=>{
    try {
            const grade = await Grade.findByIdAndUpdate(id, body);
            return grade;
    } catch (error) {
             throw error;
    }
}

const deleteGrade = async (id, body)=>{
    try {
            const grade = await Grade.findByIdAndDelete(id);
            if (!grade){
                throw Error("grade already deleted");
            }
            return grade;
    } catch (error) {
             throw error;
    }
}

const fetchGrade = async (id)=>{
    try {
            const fetchedGrade = await Grade.findOne({"_id":id});
            if (!fetchedGrade){
                throw Error("invalid id");
            }
            return fetchedGrade;
    } catch (error) {
             throw error;
    }
}

const fetchAllGrades = async ()=>{
    try {
            const exsitingGrades = await Grade.find({});
            return exsitingGrades;
    } catch (error) {
             throw error;
    }
}

module.exports = {fetchAllGrades,createNewGrade, fetchGrade,updateGrade,deleteGrade};