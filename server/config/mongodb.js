import mongoose from "mongoose";

const connectDB = async () => {
   
    mongoose.connection.on('connected',()=>{
            console.log("DB Connected successfully")
            
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/cricket_shop`)
        
   
}

export default connectDB