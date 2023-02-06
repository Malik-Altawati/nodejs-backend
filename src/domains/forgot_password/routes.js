const express = require("express");
const router = express.Router();
const { sendPasswordResetOTPEmail} = require("./controller");

//  Password reset request
router.post("/", async(req,res) =>{
    try{
        let {email} = req.body;
       if(!email) throw Error("An Email is required");

       const createdPasswordResetOTP = await sendPasswordResetOTPEmail(email);
        res.status(200).json(createdPasswordResetOTP);
    } catch (error){
        res.status(400).send(error.message);
    }
});


module.exports = router;
