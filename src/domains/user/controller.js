const User = require("./model");
const {hashData, verifyHashedData} = require("./../../util/hashData");
const createToken = require("./../../util/createToken");
const authenticateUser = async(data)=>{
    try{
        const {email,password} = data;
        const fetchedUser = await User.findOne({email});
        if (!fetchedUser){
            throw Error("Invalid credentials entered!");
        }
        const hashedPassword = fetchedUser.password;
        const passwordMatch = await verifyHashedData(password,hashedPassword);
        if(!passwordMatch){
            throw Error("Invalid password entered!")
        }
        //create user token
        const tokenData = {userId: fetchedUser._id,email};
        const token = await createToken(tokenData);
        // assign user token
        fetchedUser.token = token
        return fetchedUser;
    } catch (error) {
        throw error;
    }
};

const createNewUser = async (data) =>{
    try {
        const {name, email, password } = data;
        // checking if user already exists
        const exsitingUser = await User.findOne({email});
        if(exsitingUser){
            throw Error("User with the provised email already exists");
        }
        // hash password
        const hashedPassword = await hashData(password);
        console.log(hashedPassword)
        const newUser = new User({
            name,
            email,
            password:hashedPassword,
        });

        const createdUser = await newUser.save();
        return createdUser;
    
    } catch (error) {
        throw error;
    }
}

module.exports = { createNewUser,authenticateUser };