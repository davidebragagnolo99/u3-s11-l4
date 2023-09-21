import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="navbar">
        <Navbar.Brand href="#home">Spaceflight News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Item>
            <Link className="navBtn text-decoration-none p-3" id="home" to={"/"}>
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="navBtn text-decoration-none p-3" to={"*"}>
              About
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="navBtn text-decoration-none p-3" to={"*"}>
              Browse
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
