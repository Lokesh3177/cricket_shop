import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
    // If already connected, return cached connection
    if (cached.conn) {
        console.log("Using cached MongoDB connection");
        return cached.conn;
    }

    // If connection is in progress, wait for it
    if (cached.promise) {
        console.log("Waiting for MongoDB connection promise");
        return cached.promise;
    }

    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI environment variable is not set");
        }

        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}`, {
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            retryWrites: true,
            w: 'majority',
            maxPoolSize: 5,
            minPoolSize: 2,
            connectTimeoutMS: 10000,
            family: 4 // Use IPv4
        }).then((connection) => {
            console.log("MongoDB connected successfully");
            cached.conn = connection;
            return connection;
        }).catch((error) => {
            console.error("MongoDB connection error:", error.message);
            cached.promise = null;
            throw error;
        });

        return cached.promise;
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        throw error;
    }
};

export default connectDB;