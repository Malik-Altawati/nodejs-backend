const express = require("express");
const router = express.Router();
const { createNewStudent } = require("./controller");


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

module.exports = router;
