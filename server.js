const app = require("./app");
let port = process.env.port



app.listen(3021, ()=>{
    console.log(`server running port ${port}`);
    
})