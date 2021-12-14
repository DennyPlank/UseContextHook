import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/home"> Home </Link>
      <Link to="/profiles"> Profiles </Link>
      <Link to="/profile"> My Profile </Link>
    </div>
  )
}
export default Navbar;