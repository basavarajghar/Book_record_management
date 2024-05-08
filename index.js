const express = require("express");

const { users } = require("./data/users.json");

const app = express();

const PORT = 8081;

app.use(express.json());



app.get("/", (req, res) => {
    res.status(200).json({
        message: "server is up and running :-)",
    });
});


/*
Route >> /users
Method>> GET
Description >> Get all users 
Access:Public
parameter:none
*/

app.get("/users", (re, res) => {
    res.status(200).json({
        success: true,
        data: users,
    });
});

app.get("*", (req, res) => {
    res.status(404).json({
        message: "this root does not exist"
    });
});
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});
