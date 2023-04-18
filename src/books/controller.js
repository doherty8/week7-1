const Book = require("./model");

// 1 - To view all books in the database
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({message: "success", books: books});
    } catch (error) {
        console.log(error);
    }
};

 // 2 - To add a new book to the database
const addBook = async (req, res) => {
try {
    const newBook = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        });
    res.status(201).json({message: "success", newBook: newBook,});
     } catch (error) {
         console.log(error);
    }
};

// 3 - To update author of book only
const updateAuthor = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, { author: req.body.author }, { new: true });
        res.status(200).json({message: "success", updatedBook: updatedBook,});
    } catch (error) {
        console.log(error);
    }
};

// 4 - To search by a book name and update any field
const updateByTitle = async (req, res) => {
    try {
        const updatedBook = await Book.findOneAndUpdate(
            { title: req.params.title }, req.body, { new: true });
        if (updatedBook) {
            res.status(200).json({message: "success",
            updatedBook: updatedBook,});
        } else {
            res.status(404).json({message: "Book not found"});
        }
    } catch (error) {
        console.log(error);
    }
};

// 5 - Update any criteria by book ID
const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({message: "success", updatedBook: updatedBook,});
    } catch (error) {
        console.log(error);
    }
};

// 6 - Delete one book from the database
const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "success", deletedBook: deletedBook,});
    } catch (error) {
        console.log(error);
    }
};

// 7 - Delete all books from the database
const deleteAll = async (req, res) => {
    try {
        const result = await Book.deleteMany({});
        res.status(200).json({message: "success", deletedCount: result.deletedCount});
    } catch (error) {
        console.log(error);
    }
};

// // 8 - Attempt at dynamic update
//  const searchAndUpdate = async (req, res) => {
//         try {
//             const searchAndUpdate = await Book.updateOne(
//                 { title: req.body.title },
//                 { [req.body.key]: req.body.value },
//             );
//             res.status(200).json({ message: "Dynamically Updated", searchAndUpdate: searchAndUpdate });
//         } catch (error) {
//             console.log(error);
//         }
//     };
    

module.exports = {
    getAllBooks, 
    addBook,
    updateAuthor,
    updateByTitle,
    updateBook,
    deleteBook,
    deleteAll,
    // searchAndUpdate
};