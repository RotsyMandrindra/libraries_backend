import express, { Request, Response } from "express";
import { LoginUser, getUser, registerUser } from "./prisma/Contrôleur/login";
import { createBook, deleteBook, getBook } from "./prisma/Contrôleur/book";
import { createAuthor, deleteAuthor, findAuthor } from "./prisma/Contrôleur/author";
import { createCategory, deleteCategory, findCategory } from "./prisma/Contrôleur/category";
import cors from "cors";

const app = express();
const port = 8080;
app.use(express.json());

app.use(
  cors({
    origin: "https://e-library-api.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/book", getBook);
app.get("/author", findAuthor);
app.get("/category", findCategory);
app.get("/user", getUser);

app.post("/login", LoginUser);
app.post("/register", registerUser);
app.post("/book", createBook);
app.post("/author", createAuthor);
app.post("/category", createCategory);
app.delete("/category", deleteCategory);
app.delete("/author", deleteAuthor);
app.delete("/book", deleteBook);

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});
