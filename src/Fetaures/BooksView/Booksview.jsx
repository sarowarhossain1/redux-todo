import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteBook } from '../Book/BooksSlice'
import { Link } from 'react-router-dom'

const Booksview = () => {
    const books = useSelector((state) =>state.booksReducer.books)
    // console.log(books)

    const dispatch = useDispatch()
    const handleDeleteBook = (id) =>{
         dispatch(deleteBook(id))
    }
    
  return (
    <div className='container'>
        <h2 className='fw-semibold text-danger-emphasis text-center mt-4'>List of Books</h2>
        <table class="table tabel bordered " style={{boxShadow:"0px 0px 4px #4444"}}>
  <thead>
    <tr>
      <th className="border border-2">Id</th>
      <th className="border border-2">Title</th>
      <th className="border border-2">Author</th>
      <th className="border border-2">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        books && books.map((book)=>{
            const {id, title, author} = book;
            return (<tr key={id}>
                <td className='col-1 border'>{id}</td>
                <td className='col-2 border'>{title}</td>
                <td className='col-3 border'>{author}</td>
                <td className='col-2 border'>
                    <Link to={"/edit-book"} state={{id, title, author}}>
                    <button className='btn btn-sm btn-info m-2'>Edit</button>
                    </Link>
                    <button className='btn btn-sm btn-danger' onClick={()=>{handleDeleteBook(id)}}>Delete</button>
                </td>
              </tr>)
        })
    }
  </tbody>
</table>
    </div>
  )
}

export default Booksview