import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Quote from "./models/Quote.js";
import quotes from "./data/data.js";

const importData = async () => {
    try {
        await connectDB();
        await Quote.deleteMany();
        await Quote.insertMany(quotes);
        console.log("Data Imported!");
        process.exit();
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

importData();
