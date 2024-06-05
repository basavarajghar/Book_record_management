const express = require("express");
const { getAllBooks, getSingleBookById, getAllIssuedBooks } = require("../controllers/book-controller.js");
const { Books } = require("../data/Books.json")
// const { Users } = require("../data/users.json");
const router = require("./Users");
// const router = express.Router();

// module.exports = router;

const Router = express.Router();

const { BookModels, UserModels } = require("../models/index.js");

/*
Route >> /books
Method>> GET
Description >> Getting all books
Access:Public
parameter(params):none
*/

router.get("/", getAllBooks);

// router.get("/", (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "get all books",
//         data: Books
//     });
// });

/*
Route >> /books
Method>> GET
Description >> Getting all books by their id
Access:Public
parameter(params):id
*/

router.get("/:id", getSingleBookById);

// router.get("/:id", (req, res) => {
//     const { id } = req.params;
//     const book = Books.find((each) => each.id === id)

//     if (!Books) {
//         return res.status(200).json({
//             success: false,
//             message: "books not found",
//         });
//     }
//     return res.status(200).json({
//         success: true,
//         message: "books the books their id",
//         data: Books,
//     })
// })


/*
Route >> /books/issued
Method>> GET
Description >> Getting all books by their id
Access:Public
parameter(params):id
*/

router.get("/issued/by-user", getAllIssuedBooks);

/*
Route >> /
Method>> POST
Description >> Adding a new book
Access:Public
parameter(params):none
Data : id,name,gene,price,publisher
*/

router.post("/", (req, res) => {
    const { data } = req.body;

    if (!data) {
        return res.status(400).json({
            success: false,
            message: "no data to add a book",

        });
    }
    const book = Books.find((each) => each.id === data.id);
    if (book) {
        return res.status(404).json({
            success: false,
            message: "book already exists",
        })
    }
    const allBooks = { ...Books, data }; //(...=>spread) ...Books=> to show all the data in the book like,  diff no. of id's
    return res.status(200).json({
        success: true,
        message: "added book successfully",
        data: allBooks,
    });
});

/*
Route >> /:id
Method>> PUT
Description >>updating book by id
Access:Public
parameter(params):id
Data : id,name,gene,price,publisher
*/

router.put("/updateBook/:id", (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    const user = Books.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "Books doesn't exists",
        });
    }
    const updateBookData = Books.map((each) => { //map is for checking each id and data
        if (each.id === id) {
            return {
                ...each,
                ...data,
            };
        }
        return each;
    });
    return res.status(200).json({
        success: true,
        message: "Books updated !!",
        data: updateBookData,
    });
});




module.exports = router;



