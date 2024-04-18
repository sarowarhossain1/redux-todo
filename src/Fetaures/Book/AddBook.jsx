import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./BooksSlice";
import { Link, useNavigate } from "react-router-dom";


const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const numberOfBooks = useSelector((state)=>state.booksReducer.books.length)

  const handleSubmit = (e)=>{
    e.preventDefault();
    const book = {id: numberOfBooks + 1 ,title, author}
    dispatch(addBook(book))
    navigate("/show-books", {replace:true})
  }
  return (
    <div className=" " >
      <div className='d-flex flex-column justify-content-center w-100 bg-light align-items-center vh-100'>
         <h3 style={{fontWeight:"600"}}>Add Book</h3>
        <div className='w-50 h-50 border border-2 shadaw rounded px-5 pt-3 pb-2 d-flex justify-content-center align-items-center'>
        <form onSubmit={handleSubmit}>
     <div >
        <div>
            <label htmlFor="title">Title:</label>
         <input type="text" className='border border-2 mt-3 ms-3'
         name="title"  style={{width:"380px", height:"35px"}}
         id="Title" 
         placeholder='Title' 
         value={title}
         onChange={(e)=>{
            setTitle(e.target.value)
          }}
         />
         
      </div>
        <div>
            <label htmlFor="author">Author:</label>
         <input type="text" className='border border-2 mt-3 ms-3'
         name="author"  style={{width:"380px", height:"35px"}}
         id="author" 
         placeholder='Author' 
         value={author}
         onChange={(e)=>{
            setAuthor(e.target.value)
          }}
         />
         
      </div>
      </div>
      <div class="modal-footer mt-4">
        <button type="submit"   class="btn btn-primary m-2">Add Book</button>
        <Link to={"/show-books"}   class="btn btn-primary m-2">Back</Link>
      </div>
     </form>
        </div>
    </div>
    </div>
  );
};

export default AddBook;
