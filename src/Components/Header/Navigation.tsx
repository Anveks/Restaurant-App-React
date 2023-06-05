import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import '../../assets/css/Main.css'
import { NavLink } from "react-router-dom";

function Navigation(): JSX.Element {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <NavLink to={"/home"} className="logo"> Restaurant App </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/home"}> Home </NavLink>
            <NavLink to={"/menu"}> Menu </NavLink>
            <NavLink to={"/about"}> About </NavLink>
            <NavLink to={"/contact"}> Contact Us </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;