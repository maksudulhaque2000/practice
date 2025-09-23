import { Server } from "http";
import mongoose from "mongoose";
import app from "./app.js";

let server: Server;


const startServer = async () => {
    try {
        await mongoose.connect("mongodb+srv://phTourManagement:phTourManagement@cluster0.bjzga.mongodb.net/tour-management?retryWrites=true&w=majority&appName=Cluster0")

        console.log("Connected to DB...✅");

        server = app.listen(3000, () => {
            console.log("Server is running on port 3000✅");
        })
    } catch (error) {
        console.error("Error connecting to DB❌", error);
    }
}

startServer();
