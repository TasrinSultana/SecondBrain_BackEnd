import mongoose, { connect } from "mongoose";
export async function connect_db() {
    try {
        await connect("mongodb+srv://happy:bmOUOnDqLcxUT5Z1@cluster0.qoh18.mongodb.net/brainly");
        console.log("MongoDB connected successfully...");
        // console.log(stored.connection,stored.Collection);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); 
    }
}