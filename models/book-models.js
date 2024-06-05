const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(); ({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        trpe: String,
        required: true,
    },
    genre: {
        trpe: String,
        required: true,
    },
    publisher: {
        trpe: String,
        required: true,
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Book", bookSchema);