const express = require("express");


const userRouter = require("./routes/Users.js");
const booksRouter = require("./routes/Books.js");
const app = express();


const PORT = 8081;

app.use(express.json());



http: app.get("/", (req, res) => {
    res.status(200).json({
        message: "server is up and running :-)",
    });
});


app.use("/users", userRouter);
app.use("/books", booksRouter);
/*
Route >> /users
Method>> GET
Description >> Get all users 
Access:Public
parameter:none
*/




app.get("*", (req, res) => {
    res.status(404).json({
        message: "this root does not exist"
    });
});
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});
