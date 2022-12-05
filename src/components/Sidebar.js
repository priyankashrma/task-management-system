import React from "react";
import ls from "local-storage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Sidebar = () => {
  const loggedInUser = ls.get("loggedInUser");
  return (
    <Navbar bg="light" expand={false} className="mb-3">
      <Container fluid className="m-2">
        <Navbar.Brand href="#">Task Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby="offcanvasNavbar-expand-sm"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbar-expand-sm">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/reports">Reports</Nav.Link>
              {loggedInUser && (
                <Nav.Link
                  onClick={() => {
                    ls("loggedInUser", "");
                    window.location.replace("/");
                  }}
                >
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Sidebar;

