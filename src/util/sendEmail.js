const nodemailer = require("nodemailer");
const {AUTH_EMAIL,AUTH_PASSWORD} = process.env;
let transporter = nodemailer.createTransport({
    host:"smtp-mail.outlook.com",
    auth:{
        user:AUTH_EMAIL,
        pass:AUTH_PASSWORD,
    },
});

// test transporter
transporter.verify((error,success)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Email ready for messages");
        console.log(success)
    }
});

const sendEmail = async(mailOptions)=>{
    try {
        await transporter.sendMail(mailOptions);
        return;
    } catch (error) {
        throw error;
    }
};


module.exports = sendEmail;
