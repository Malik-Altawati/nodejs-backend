const express = require("express");
const router = express.Router();
const { createNewSubject, fetchSubject,updateSubject, fetchAllSubjects,deleteSubject } = require("./controller");



// create 
router.post("/create", async(req,res) =>{
    try{
        let {name} = req.body;
        name = name.trim();
        if(!name){
            throw Error("Subject name needs to be provided");
        }  else{

        }
            const newSubject = await createNewSubject({name});
            res.status(200).json(newSubject);
    } catch (error){
        res.status(400).send(error.message);
    }
});

// fetch one 
router.get("/:id", async(req,res) =>{
    try{
        const subject = await fetchSubject(req.params.id);
        res.status(200).json(subject);
    } catch (error){
        res.status(400).send(error.message);
    }
});


// update one
router.patch("/:id", async(req,res) =>{
    try{
        await updateSubject(req.params.id, req.body);
        res.status(200).json({status:true});
    } catch (error){
        res.status(400).send(error.message);
    }
});

// delete one
router.delete("/:id", async(req,res) =>{
    try{
        await deleteSubject(req.params.id);
        res.status(200).json({status:true});
    } catch (error){
        res.status(400).send(error.message);
    }
});


// fetch all
router.get("/", async(req,res) =>{
    try{
            const subjects = await fetchAllSubjects();
            res.status(200).json(subjects);
    } catch (error){
        res.status(400).send(error.message);
    }
});




module.exports = router;