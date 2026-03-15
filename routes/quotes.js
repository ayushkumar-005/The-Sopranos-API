import express from "express";
import {
    getQuotes,
    getRandomQuote,
    getQuoteById,
} from "../controllers/quotesController.js";

const router = express.Router(); // Initializing Router Instance

// Routes
router.get("/random", getRandomQuote);

router.get("/:id", getQuoteById);

router.get("/", getQuotes);

export default router;
