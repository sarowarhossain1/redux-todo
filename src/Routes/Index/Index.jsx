import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Error from '../../Pages/Error/Error'
import Navbar from '../../Layouts/Navbar/Navbar'
import Booksview from '../../Fetaures/BooksView/Booksview'
import AddBook from '../../Fetaures/Book/AddBook'
import EditBook from '../../Fetaures/EditBook/EditBook'

const Index = () => {
  return (
   <BrowserRouter>
   <Navbar/>
     <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/show-books' element={<Booksview/>}/>
          <Route  path='/add-book' element={<AddBook/>}/>
          <Route  path='/edit-book' element={<EditBook/>}/>
          <Route  path='*' element={<Error/>}/>
        </Routes> 
   </BrowserRouter>
  )
}

export default Index