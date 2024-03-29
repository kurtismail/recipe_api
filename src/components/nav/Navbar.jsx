import React, { useState } from "react";
import "./Navbar.style";
import Nav, { Brand, Menu, MenuLink, Hamburger } from "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"<Food>"}</i>
        <span>Recipe_app</span>
      </Brand>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="login" onClick={() => sessionStorage.clear()}>Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

