const express = require("express");
const { getAllBooks, getSingleBookById, getAllIssuedBook, addNewBook, getAllIssuedBooks, updateBookById } = require("../controllers/book-controller.js");
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

router.post("/", addNewBook);
/*
Route >> /:id
Method>> PUT
Description >>updating book by id
Access:Public
parameter(params):id
Data : id,name,gene,price,publisher
*/

router.put("/updateBook/:id", updateBookById);



module.exports = router;



// ... is called spread operator