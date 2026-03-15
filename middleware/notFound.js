// Middleware to catch routes that don't exist

const notFound = (req, res, next) => {
    const err = new Error("Not Found");
    res.status(404).json({ msg: err.message });
};

export default notFound;
