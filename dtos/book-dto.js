//Data transfer object -book

class IssuedBook {
    _id;
    name;
    genre;
    price;
    publisher;
    issuedBy;
    issuedDate;
    returnDate;


    //whenever  we create obj, the constructor get invoked = parameterized constructor
    constructor(user) {
        this._id = user.issuedBook._id;
        this._name = user.issuedBook._name;
        this._genre = user.issuedBook._genre;
        this._price = user.issuedBook._price;
        this._publisher = user.issuedBook._publisher;
        this._issuedBy = user._issuedBy;
        this._issuedDate = user._issuedDate;
        this._returnDate = user._returnDate;
    }
}
// var ref = IssuedBook(userobj);


module.exports = IssuedBook;