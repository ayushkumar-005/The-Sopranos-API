import quotes from "../data/data.js";

export const getQuotes = (req, res) => {
    let character = req.query.character;

    if (character) {
        const filteredQuotes = quotes.filter((q) =>
            q.character.some((name) =>
                name.toLowerCase().includes(character.toLowerCase()),
            ),
        );
        return res.send(filteredQuotes);
    }

    res.send(quotes);
};

export const getRandomQuote = (req, res) => {
    res.send(quotes[Math.floor(Math.random() * quotes.length)]);
};

export const getQuoteById = (req, res) => {
    let id = parseInt(req.params.id);

    const quote = quotes.find((q) => q.id === id);
    if (quote) {
        res.send(quote);
    } else {
        res.status(404).send({ msg: "Quote not Found" });
    }
};
