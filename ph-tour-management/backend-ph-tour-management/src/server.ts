import { Server } from "http";
import mongoose from "mongoose";
import app from "./app.js";
import { envVars } from "./app/config/env.js";

let server: Server;

const startServer = async () => {
    try {
        await mongoose.connect(envVars.DB_URL)

        console.log("Connected to DB...✅");

        server = app.listen(envVars.PORT, () => {
            console.log(`Server is running on port ${envVars.PORT}✅`);
        })
    } catch (error) {
        console.error("Error connecting to DB❌", error);
    }
}

startServer();

process.on("SIGTERM", (error) => {
    console.log(`SIGTERM...❌ Shutting down...❗❗ ${error}`);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
});

process.on("SIGINT", (error) => {
    console.log(`SIGINT...❌ Shutting down...❗❗ ${error}`);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
});

process.on("unhandledRejection", (error) => {
    console.log(`Unhandled Rejection...❌ Shutting down...❗❗ ${error}`);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
});

process.on("uncaughtException", (error) => {
    console.log(`Unhandled Exception...❌ Shutting down...❗❗ ${error}`);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
});