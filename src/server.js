require("dotenv").config();
require("./db/connection");

const express = require("express");

const bookRouter = require("./books/routes");
const Book = require("./books/model");

const app = express();

app.use(express.json());

app.use(bookRouter);

app.listen(5001, () => console.log("Server is Listening"));
