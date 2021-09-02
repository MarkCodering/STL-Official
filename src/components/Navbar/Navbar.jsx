import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
  } from './NavbarElements';
import './Navbar.css';

export default function Navbar(){
    return(<>
        <Nav>
          <NavLink to='/'>
            <h1 className="Navbar_Title">Tamkang University Space Technology Lab</h1>
          </NavLink>
          <NavMenu>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
            <NavLink to='/team' activeStyle>
              Team
            </NavLink>
            <NavLink to='/projects' activeStyle>
              Projects
            </NavLink>
            <NavLink to='/contact' activeStyle>
            Contact Us
            </NavLink>
          </NavMenu>
        </Nav>
      </>)
}