const mongoose = require("mongoose")

const url = process.env.MONGO_URI

mongoose.set('strictQuery', false);
const connectDB = async()=>{
    try {
        const connect = await mongoose.connect(url);
        console.log(`mongoDB connected : ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;