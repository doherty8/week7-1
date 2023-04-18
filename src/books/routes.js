const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { getAllBooks, addBook, updateAuthor, updateByTitle, updateBook, deleteBook, deleteAll,  } = require("./controller");

// 1 - To view all books in the database
bookRouter.get("/books/view/all", getAllBooks);

 // 2 - To add a new book to the database
bookRouter.post("/books/new", addBook);

// 3 - To update author of book only
bookRouter.put("/books/update/author/:id", updateAuthor);

// 4 - To search by title and update any information
bookRouter.put("/books/:title", updateByTitle);

// 5 - Update any criteria by book ID
bookRouter.put("/books/update/:id", updateBook);

// 6 - Delete one book from the database
bookRouter.delete("/books/delete/:id", deleteBook);

// 7 - Delete all books from the database
bookRouter.delete("/books/deleteall", deleteAll);

// // 8 - Attempt at dynamic update
// bookRouter.put("books/update/dynamic", searchAndUpdate);


module.exports = bookRouter;