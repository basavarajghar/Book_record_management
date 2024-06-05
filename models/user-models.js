const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(); (
    {
        name: {
            type: "String",
            required: true,
        },
        surname: {
            type: "String",
            required: true,
        },
        email: {
            trpe: "String",
            required: true,
        },
        issuedBook: {
            type: mongoose.Schema.Types.objectId,
            ref: "Book",
            required: false,
        },
        returnDate: {
            trpe: "String",
            required: false,
        },
        subscriptionType: {
            trpe: "String",
            required: true,
        },
        subscriptionDate: {
            trpe: "String",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);