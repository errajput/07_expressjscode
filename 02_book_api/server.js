const express = require("express");
const app = express();
const PORT = 8082;

const book = [
  { id: "1", title: "The great Gatsby", author: "F.Scott" },
  { id: "2", title: "The Moby Dic", author: "Herman" },
  { id: "3", title: "The MERN Stack", author: "Masynctech" },
];

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to my first book api using express",
    data: "Masynctech",
    address: "home",
  });
});

app.get("/books", (req, res) => {
  res.json({
    status: "success",
    message: "Books fetched successfully",
    data: books,
  });
});
// Fetch a book
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const bookFound = books.find((book) => book.id === id);
  if (!bookFound) {
    return res.json({
      status: "failed",
      message: `Book with id ${id} not found`,
    });
  }
  res.json({
    status: "success",
    message: "Books fetched successfully",
    data: bookFound,
  });
});
// Create a book
app.post("/books", (req, res) => {
  const newPost = req.body;
  books.push(newPost);
  res.json({
    status: "success",
    message: "Books created successfully",
    data: books,
  });
});

// Search for a book (req.query)
app.get("/books/search", (req, res) => {
  console.log(req.query);
  res.json({
    status: "success",
    message: "Book found successfully",
  });
});
app.listen(PORT, console.log(`server is listen on port ${PORT}`));
