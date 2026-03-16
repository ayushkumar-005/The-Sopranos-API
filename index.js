import express from "express";
import cors from "cors";
import quotesRouter from "./routes/quotes.js";
import path from "path";
import { fileURLToPath } from "url";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/db.js";

const app = express(); // Initializing App Object
const port = process.env.PORT || 8000;

// Dirname for public folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS
app.use(cors());

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/quotes", quotesRouter);

// Catch routes that don't exists
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

connectDB();

// Starting Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
