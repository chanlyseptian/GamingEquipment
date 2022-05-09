import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <ul className="nav justify-content-end align-items-center">
          <li className="nav-item">
            <Link className="text-decoration-none" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="text-decoration-none" to="/members">Members</Link>
          </li>
          <li className="nav-item">
            <Link className="text-decoration-none" to="/brands">Brands</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar