import express from "express";
import cors from "cors";
import quotesRouter from "./routes/quotes.js";

const app = express(); // Initializing App Object
const port = process.env.PORT || 8000;

// CORS
app.use(cors());

// Static Files
app.use(express.static("public"));

// Routes
app.use("/quotes", quotesRouter);

// Starting Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
