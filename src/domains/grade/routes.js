const express = require("express");
const router = express.Router();
const { fetchAllGrades,fetchGrade,createNewGrade,updateGrade,deleteGrade } = require("./controller");


// create 
router.post("/create", async(req,res) =>{
    try{
        let {name, subjects} = req.body;
        name = name.trim();
        if(!name){
            throw Error("Grade name needs to be provided");
        }  else{

        }
            const newGrade = await createNewGrade({name,subjects});
            res.status(200).json(newGrade);
    } catch (error){
        res.status(400).send(error.message);
    }
});


// update one
router.patch("/:id", async(req,res) =>{
    try{
        await updateGrade(req.params.id, req.body);
        res.status(200).json({status:true});
    } catch (error){
        res.status(400).send(error.message);
    }
});

// delete one
router.delete("/:id", async(req,res) =>{
    try{
        await deleteGrade(req.params.id);
        res.status(200).json({status:true});
    } catch (error){
        res.status(400).send(error.message);
    }
});

// fetch one 
router.get("/:id", async(req,res) =>{
    try{
        const grade = await fetchGrade(req.params.id);
        res.status(200).json(grade);
    } catch (error){
        res.status(400).send(error.message);
    }
});

// fetch all
router.get("/", async(req,res) =>{
    try{
            const grades = await fetchAllGrades();
            res.status(200).json(grades);
    } catch (error){
        res.status(400).send(error.message);
    }
});




module.exports = router;
