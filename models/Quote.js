import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    characters: {
        type: [String],
        required: true,
    },
    quote: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Quote", quoteSchema);
