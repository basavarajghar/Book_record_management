const { BookModels, UserModels, BookModel } = require("../models");

exports.getAllBooks = async (req, res) => {
    const books = await BookModels.find();

    if (books.length === 0) {
        return res.status(404).json({
            success: false,
            message: "book not found"
        });
    }
    return res.status(200).json({
        success: true,
        data: books,
    });
};
// or   exports.getAllBooks=()=>{};

exports.getSingleBookById = async (req, res) => {
    const { id } = req.params;
    const book = await BookModel.findById(id);

    if (!book) {
        return res.status(200).json({
            success: false,
            message: "books not found",
        });
    }
    return res.status(200).json({
        success: true,
        message: "books the books their id",
        data: book,
    });
};
// or   exports.getSingleBookById=()=>{};

exports.getAllIssuedBooks = async(req, res) = {
    const users = await UserModels.find({
        issuedBook: { $exists: true }
    }).populate("issuedBook");

    // Data Transfer Object

    if(issuedBooks.length === 0) {
    return res.status(404).json({
        success: false,
        message: "no books are been issued yet",
    });
}
return res.status(200).json({
    success: true,
    message: "users with the issued books..",
    data: issuedBooks,
});
}
// 1:06