import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../Fetaures/Book/BooksSlice";




const store = configureStore({
    reducer:{
        booksReducer: booksReducer
    }
})

export default store;