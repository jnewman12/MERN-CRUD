import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  console.log(props);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={'/'} className="navbar-brand">React Hacker News</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={'/'} className="nav-link">Home</Link>
          </li>

          {props.currentUser
            ? (
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li>
            )
            : (
              <>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Log In</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/signup'} className="nav-link">Sign Up</Link>
                </li>
              </>  
            )
          }
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
