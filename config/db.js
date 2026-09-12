const mongoose = require('mongoose')


const dbConnect = ()=>{
    mongoose.connect(process.env.db_url).then(()=>{
        console.log("database connected");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = dbConnect;