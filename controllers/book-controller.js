const { BookModels, UserModels, BookModel, updateBookById } = require("../models");
const issuedBook = require("../dtos/book-dto.js");
const IssuedBook = require("../dtos/book-dto.js");


//cont getAllBooksv = () =>
exports.getAllBooks = async (req, res) => {
    const books = await BookModels.find();
    console.log(BookModels);
    if (books.length === 0) {
        return res.status(404).json({
            success: false,
            message: "book not found"
        });
    }
    console.log(data);
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

exports.getAllIssuedBooks = async (req, res) => {
    const users = await UserModels.find({
        issuedBook: { $exists: true }
    }).populate("issuedBook");

    // Data Transfer Object
    const issuedBooks = users.map((each) => new IssuedBook(each));

    if (issuedBooks.length === 0) {
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
};


exports.addNewBook = async (req, res) => {
    const { data } = req.body;

    if (!data) {
        return res.status(400).json({
            success: false,
            message: "no data to add a book",
        });
    }
    await BookModels.create(data);
    const allBooks = await BookModels.find();

    return res.status(201).json({
        success: true,
        message: "Added Book Successfullly",
        data: allBooks,
    });
};

// router.put("/updateBook/:id", (req, res) => {
//     const { id } = req.params;
//     const { data } = req.body;
//     const user = Books.find((each) => each.id === id);
//     if (!user) {
//         return res.status(404).json({
//             success: false,
//             message: "Books doesn't exists",
//         });
//     }
//     const updateBookData = Books.map((each) => { //map is for checking each id and data
//         if (each.id === id) {
//             return {
//                 ...each,
//                 ...data,
//             };
//         }
//         return each;
//     });
//     return res.status(200).json({
//         success: true,
//         message: "Books updated !!",
//         data: updateBookData,
//     });
// });


exports.updateBookById = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;

    const updatedBook = await BookModels.findOneAndUpdate(
        {
            _id: id,
        },
        data,
        {
            new: true,
        });
    return res.status(200).json({
        success: true,
        message: "Upated a book by their id",
        data: updatedBook,
    });
};

// 1:06