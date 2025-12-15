import express from "express";
import quotes from "../data/data.js";

const router = express.Router(); // Initializing Router Instance

// Routes
router.get("/random", (req, res) => {
    res.send(quotes[Math.floor(Math.random() * quotes.length)]);
});

router.get("/:id", (req, res) => {
    let id = parseInt(req.params.id);

    const quote = quotes.find((q) => q.id === id);
    if (quote) {
        res.send(quote);
    } else {
        res.status(404).send({ msg: "Quote not Found" });
    }
});

router.get("/", (req, res) => {
    let character = req.query.character;

    if (character) {
        const filteredQuotes = quotes.filter((q) =>
            q.character.some((name) =>
                name.toLowerCase().includes(character.toLowerCase())
            )
        );
        return res.send(filteredQuotes);
    }

    res.send(quotes);
});

export default router;
