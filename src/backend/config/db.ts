import mongoose from "mongoose";
import {ENV, env} from "@/backend/config/env";

export async function connectDB(): Promise<void> {
    try {
        await mongoose.connect(ENV.MONGODB_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
}