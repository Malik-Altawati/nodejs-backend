const express = require("express");
const router = express.Router();
const { createNewStudent, updateStudent,fetchStudent , deleteStudent, fetchAllStudents} = require("./controller");



// create 
router.post("/create", async(req,res) =>{
    try{
        let {name,grade_id} = req.body;
        name = name.trim();
        grade_id = grade_id.trim();
        if(!(name && grade_id)){
            throw Error("Empty input fields");
        }else{
            const newStudent = await createNewStudent({name,grade_id});
            res.status(200).json(newStudent);
        }
            
    } catch (error){
        res.status(400).send(error.message);
    }
});

// fetch one 
router.get("/:id", async(req,res) =>{
    try{
        const subject = await fetchStudent(req.params.id);
        res.status(200).json(subject);
    } catch (error){
        res.status(400).send(error.message);
    }
});

// update one
router.patch("/:id", async(req,res) =>{
    try{
        await updateStudent(req.params.id, req.body);
        res.status(200).json({status:true});
    } catch (error){
        res.status(400).send(error.message);
    }
});


// delete one
router.delete("/:id", async(req,res) =>{
    try{
        await deleteStudent(req.params.id);
        res.status(200).json({status:true});
    } catch (error){
        res.status(400).send(error.message);
    }
});

// fetch all
router.get("/", async(req,res) =>{
    try{
            const students = await fetchAllStudents();
            res.status(200).json(students);
    } catch (error){
        res.status(400).send(error.message);
    }
});



module.exports = router;
