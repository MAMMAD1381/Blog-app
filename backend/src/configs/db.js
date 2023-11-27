const mongoose = require('mongoose')
const mongoURI = process.env.MONGODB_URI
console.log(mongoURI)

async function connectDB(){
    const db = await mongoose.connect(mongoURI)
    if(db.connection.readyState === 1){
        console.log(`connection to mongoDB was succesfull`)
    }
    else{
        console.log(`connection to mongoDB failed`)
    }
}

module.exports = connectDB