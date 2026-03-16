import Quote from "../models/Quote.js";

export const getQuotes = async (req, res, next) => {
    try {
        let character = req.query.character;

        let quotes;

        if (!character) {
            quotes = await Quote.find().select("-_id -__v");
        } else {
            quotes = await Quote.find({
                characters: { $regex: character, $options: "i" },
            }).select("-_id -__v");
        }

        res.status(200).json({
            success: true,
            count: quotes.length,
            data: quotes,
        });
    } catch (error) {
        next(error);
    }
};

export const getRandomQuote = async (req, res, next) => {
    try {
        let randomQuote = await Quote.aggregate([
            { $sample: { size: 1 } },
            { $project: { _id: 0, __v: 0 } },
        ]);
        res.status(200).json({
            success: true,
            data: randomQuote[0],
        });
    } catch (error) {
        next(error);
    }
};

export const getQuoteById = async (req, res, next) => {
    try {
        let id = parseInt(req.params.id);
        const quote = await Quote.findOne({ id: id }).select("-_id -__v");
        if (quote) {
            res.status(200).json({
                success: true,
                data: quote,
            });
        } else {
            res.status(404).send({ success: false, msg: "Quote not Found" });
        }
    } catch (error) {
        next(error);
    }
};
