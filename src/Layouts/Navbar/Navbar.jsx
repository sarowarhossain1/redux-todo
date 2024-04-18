import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-info bg-danger-subtle">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <img src="src/Layouts/Navbar/shunno_it.png" style={{width:"40px"}} alt="" />
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link fw-semibold text-black" to={"/"} >Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link  fw-semibold text-black" to={"/show-books"} >Show Books</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link fw-semibold text-black" to={"/add-book"} >Add Book</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar