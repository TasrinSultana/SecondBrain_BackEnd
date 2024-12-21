import mongoose, { connect } from "mongoose";
export async function connect_db() {
    try {
        await connect(process.env.DB_CONNECTION as string);
        console.log("MongoDB connected successfully...");
        // console.log(stored.connection,stored.Collection);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); 
    }
}