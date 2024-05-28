const express = require("express");
const users = require("../data/users.json")
const router = express.Router();
/*
Route >> /users
Method>> GET
Description >> Get all users 
Access:Public
parameter:none
*/


router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: users,
    });
});

/*
Route >> /users
Method>> GET
Description >> Get all users by there id 
Access:Public
parameter(params):id
*/

router.get("/:id", (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user doesn't exists",
        });
    }
    return res.status(200).json({
        succes: true,
        message: "user found",
        data: user,
    });
});

/*
Route >> /users
Method>> POST
Description >> creating a new user
Access:Public
parameter(params):none
*/

router.post("/", (req, res) => {
    const { id, name, surname, email, subscriptionType, subscriptionDate } = req.body
    const user = users.find((each) => each.id === id);
    if (user) {
        return res.status(404).json({
            success: false,
            message: "user with the id exists",
        });
    }
    users.push({
        id,
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate,
    });
    return res.status(201).json({
        success: true,
        message: "user added successfully",
        data: users,
    });
});

/*
Route >> /users/:id
Method>> PUT
Description >> updating user
Access:Public
parameter(params):none
*/

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user doesn't exists",
        });
    }
    const updateUserData = users.map((each) => {
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
        message: "User updated !!",
        data: updateUserData,
    });
});

/*
Route >> /users/:id
Method>> DELETE
Description >> Deleting  user by their id
Access:Public
parameter(params):none
*/

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user doesn't exists",
        });
    }
    const index = users.indexOf(user);
    users.splice(index, 1);

    return res.status(200).json({
        success: true,
        message: "Deleted user...",
        data: users,
    });
});


/*
Route >> /users/subscription-datails/:id
Method>> GET
Description >> get all users subscription details
Access:Public
parameter(params):ID
*/

router.get("/subscription-details/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((each) => each.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user with id didn't exists",
        });
    }
    const getDateInDays = (data = "") => {
        let date;
        if (data === "") {
            date = new Date();
        } else {
            date = new Date(data);
        }
        let days = Math.floor(date / (1000 * 60 * 60 * 24));
        return days;
    };

    const subscriptionType = (data) => {
        if ((user.subscriptionType === "Basic")) {
            date = date + 90;
        } else if ((user.subscriptionType === "Standars")) {
            date = date + 180;
        } else if ((user.subscriptionType === "Premium")) {
            date = date + 365;
        }
        return date;
    };

    // jan 1 1970

    let returnDate = getDateInDays(user.returnDate);
    let currentDate = getDateInDays();
    let subscriptionDate = getDateInDays(user.subscriptionDate);
    let subscriptionExpiration = subscriptionType(subscriptionDate);
    // console.log("returnDate", returnDate);
    // console.log("currentDat", currentDate);
    // console.log("00subscriptionDate", subscriptionDate);
    // console.log("subscriptionExpirtion", subscriptionExpiration);


    const data = {
        ...user,
        isSubscriptionExpired: subscriptionExpiration <= currentDate,
        daysLeftForExpiration: subscriptionExpiration <= currentDate ? 0 : subscriptionExpiration - currentDate,
        fine:
            returnDate < currentDate ? subscriptionExpiration <= currentDate
                ? 100
                : 50
                : 0,
    };
    return res.status(200).json({
        success: true,
        message: "subscription detail for the user is:",
        data,
    })
});



module.exports = router;