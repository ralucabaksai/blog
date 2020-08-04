import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Nav className='mr-auto'>
        <Link className='nav-link' to='/blog/'>
          Home
        </Link>
        <Link className='nav-link' to='/blog/blogpage'>
          Blogpage
        </Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
