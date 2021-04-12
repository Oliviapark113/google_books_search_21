import React from 'react'
import { Link } from 'react-router-dom'
import '../css/nav.css'

const Nav = () => 
 (
    <nav className="navbar navbar-expand-lg">

      <div className="link-containter" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link" href="#">Google Book Search</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" href="#">Search</Link>
          </li>
          <li className="nav-item">
            <Link to="/saved" className="nav-link" aria-current="page" href="#">Saved</Link>
          </li>
        </ul>
      </div>

    </nav>

 
)





export default Nav