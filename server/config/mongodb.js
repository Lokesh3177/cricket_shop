import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Check if already connected
        if (mongoose.connection.readyState === 1) {
            console.log("Already connected to MongoDB");
            return;
        }

        mongoose.connection.on('connected', () => {
            console.log("DB Connected successfully");
        });

        mongoose.connection.on('error', (err) => {
            console.error("MongoDB connection error:", err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log("MongoDB disconnected");
        });

        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI environment variable is not set");
        }

        await mongoose.connect(`${process.env.MONGODB_URI}/cricket_shop`, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            retryWrites: true,
            w: 'majority',
            maxPoolSize: 10,
            minPoolSize: 5
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        throw error;
    }
};

export default connectDB;