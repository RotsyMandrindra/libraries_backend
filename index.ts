import express, { Request, Response } from "express";
import {LoginUser, registerUser} from "./prisma/Contrôleur/login";
import {createBook,getBook} from "./prisma/Contrôleur/book";
import { createAuthor, findAuthor } from "./prisma/Contrôleur/author";
import { createCategory, findCategory } from "./prisma/Contrôleur/category";
import cors from 'cors';

const app = express();
const port = 8080;
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));

app.get('/book',getBook);
app.get('/author',findAuthor);
app.get('/category',findCategory);


app.post('/login', LoginUser);
app.post('/register',registerUser);
app.post('/book',createBook);
app.post('/author',createAuthor);
app.post('/category',createCategory);


app.listen(port, () =>{
    console.log(`Server is running on port: http://localhost:${port}`);
})