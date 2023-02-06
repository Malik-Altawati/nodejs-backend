const User = require("./../user/model");
const {sendOTP} = require("./../otp/controller")

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


module.exports = { sendPasswordResetOTPEmail};