import express from "express";
import cors from "cors";
import quotesRouter from "./routes/quotes.js";
import path from "path";
import { fileURLToPath } from "url";

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

// Starting Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
