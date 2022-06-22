import React from "react";
import "./Top.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const Top = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="nav-bar"
    >
      <Container>
        <Navbar.Brand href="#Home">
          <div className="logo">
            <img src="./assets/design.png" alt="assets" />{" "}
            <h4>Social Media Campaign</h4>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div className="nav-items">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Violence">Youths and Violence </Nav.Link>
              <Nav.Link href="#Hidden">Hidden Wounds</Nav.Link>
              <Nav.Link href="#Wellbeing">Mental Health Wellbeing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Top;
