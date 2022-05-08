import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <ul className="nav justify-content-end align-items-center">
          <li className="nav-item">
            <a className="text-decoration-none" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="text-decoration-none" href="/">Members</a>
          </li>
          <li className="nav-item">
            <a className="text-decoration-none" href="/">Brands</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar