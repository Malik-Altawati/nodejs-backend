const app = require("./app");
const { PORT } = process.env;
const startApp = () =>{
    app.listen(PORT,()=>{
        console.log(`✅ Server is running on PORT ${PORT}`);
    })
};

startApp();