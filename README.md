# Book_record_management

server >>storing some bookdata
       >>User Register
       >>Subscribers

This is a Book record managment API Server/ Backend for the library system or manuals or books

Fine System:
user:06/03/23-06/06/23
0/06/23=>50*3=150/-

# subscription types
3 months(Basics)
6 months(Stndard)
9 months(Premium)

If the Subscription type is standard && if the subscription date is 06/03/23
=> then Subscription is valid till 06/06/23

ithin subscription date >>if we miss the renewal >>50/-
subscripion date is also been missed  >> and also missed the renewal >> 100+50 /- day

missed by renewal date >> 50/-
missed by subscrioption >> 100/-
missed by both renewal and subscription >> 100 + 50 = 150/-



# Results and Endpoints

## /user
POST:Create a new user
GET: get all the user info here 

## /users/(id)
 GET:a user by id
 PUT: update a user by there id
 DELETE: Delete a user by id(check if he/she have an issued book)&&(is there any fine to be paid)


 ## /users/subscription-details/{id}
 GET:get user subscrition details 
        >> Date of subscription
        >> Valid Till
        >> is there any fine

## /books
GET:get all the books
POST:Create/Add a new book

## /books/{id}
GET:get a book by id
PUT:Update a book by id


## /books/issued
GET:Get all the books isued

## /books/issued/withfines
GET:Get all the books with their fines




## npm init
## npm i nodemon --save-dev




mvc architecture

>> m -> model
>> v -> view
>> c -> controllers(brain)

schema >>
id: string
name: string
age: number
gender: chat || varchar

model >>
id: 123
name: basava
age: 23
gender: 'm'



Foreign key:
>> Referential Integrety

user table                           book table
issuedbook : 2(foreign key here)     issuedbook: 2(primary key)





<!-- 

router.get("/issued/by-user", (req, res) => {
    const usersWithTheIssuedBook = users.filter((each) => {
        if (each.issuedBooks) return each;
    });
    const issuedBooks = [];
    usersWithTheIssuedBook.forEach((each) => {
        const book = Books.find((book) => { book.id = each.issuedBook });
        book.issuedBy = each.name
        book.issuedDate = each.issuedDate;
        book.returnDate = each.returnDate;
        issuedBooks.push(Books);
    });
    if (issuedBooks.length === 0) {
        return res.status(404).json({
            success: false,
            message: "no books are been issued yet",
        })
    }
    return res.status(200).json({
        success: true,
        message: "users with the issued books..",
        data: issuedBooks,
    });
});


 -->