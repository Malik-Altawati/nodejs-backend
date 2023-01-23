const Subject = require("./model");

const createNewSubject = async (data) =>{
    try {
        const {name } = data;
        // checking if subject already exists
        const exsitingSubject = await Subject.findOne({name});
        if(exsitingSubject){
            throw Error("Subject with the provided name already exists");
        }
        
        const newSubject = new Subject({ name });
        const createdSubject = await newSubject.save();
        return createdSubject;
    
    } catch (error) {
        throw error;
    }
}

const updateSubject = async (id, body)=>{
    try {
            const subject = await Subject.findByIdAndUpdate(id, body);
            return subject;
    } catch (error) {
             throw error;
    }
}

const deleteSubject = async (id, body)=>{
    try {
            const subject = await Subject.findByIdAndDelete(id);
            if (!subject){
                throw Error("subject already deleted");
            }
            return subject;
    } catch (error) {
             throw error;
    }
}

const fetchSubject = async (id)=>{
    try {
            const fetchedSubject = await Subject.findOne({"_id":id});
            if (!fetchedSubject){
                throw Error("invalid id");
            }
            return fetchedSubject;
    } catch (error) {
             throw error;
    }
}

const fetchAllSubjects = async ()=>{
    try {
            const exsitingSubjects = await Subject.find({});
            return exsitingSubjects;
    } catch (error) {
             throw error;
    }
}

module.exports = { createNewSubject ,fetchSubject,updateSubject,fetchAllSubjects,deleteSubject};