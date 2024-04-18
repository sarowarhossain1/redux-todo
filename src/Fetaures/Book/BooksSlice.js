import { createSlice } from '@reduxjs/toolkit'

const initialBooks = {
  books: [{ id: 1, title: "Love Bangladesh", author: "jia" },
  { id: 2, title: "Bangladeshi", author: "jia" }],
};


 export const BooksSlice = createSlice({
   name:"books",
   initialState: initialBooks,
   reducers: {
   showBooks: (state) => state,
   addBook: (state, action)=> {
    state.books.push(action.payload)
   },
   updateBook: (state, action)=> {
    const {id, title, author} = action.payload;
   const isBookExist = state.books.filter((book)=>book.id === id)
    if(isBookExist){
        isBookExist[0].title = title;
        isBookExist[0].author = author;

    }
   },
   deleteBook: (state, action)=> {
    const id = action.payload;
    state.books = state.books.filter(book=>book.id !== id)
   }
   }
})

export const {showBooks, addBook, deleteBook, updateBook} = BooksSlice.actions;
export default BooksSlice.reducer;