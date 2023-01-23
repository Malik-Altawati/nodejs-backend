require('dotenv').config();
const mongoose = require('mongoose');

const { MONGODB_URI } = process.env;

const connectToDB = async () =>{
    try {
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })
        console.log("✅ Database Connection Verified");
    } catch(error) {
        console.log(error);
        }
};

connectToDB();
