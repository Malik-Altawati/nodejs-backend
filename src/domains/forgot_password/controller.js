const User = require("./../user/model");
const {sendOTP, verifyOTP, deleteOTP} = require("./../otp/controller")
const {hashData} = require("./../../util/hashData")

const resetUserPassword = async ({email, otp, newPassword}) =>{
    try {
        const validOTP = await verifyOTP({email, otp});
        if(!validOTP){
            throw Error("Invalid code passed. check your inbox.")
        }
        // now update user record with new password
        if(newPassword.length < 8){
            throw Error("Password is too short");
        }
        const hashedNewPassword = await hashData(newPassword);
        await User.updateOne({email},{password:hashedNewPassword});
        await deleteOTP(email);
        return
    } catch (error) {
        throw error;
    }
};

const sendPasswordResetOTPEmail = async(email) =>{
    try {
        // check if an account exist
        const exsitingUser = await User.findOne({email});
        if (!exsitingUser){
            throw Error("There's no account for the provided email.")
        }
        if (!exsitingUser.verified){
            throw Error("Email hasn't been verified yet, check your inbox.");
        }
        const otpDetails = {
            email,
            subject:"Password Reset",
            message:"Enter the code below to reset your password.",
            duration:1
        }
        const createdOTP = await sendOTP(otpDetails);
        return createdOTP;
    } catch (error) {
            throw error;
    }
}


module.exports = { sendPasswordResetOTPEmail,resetUserPassword};