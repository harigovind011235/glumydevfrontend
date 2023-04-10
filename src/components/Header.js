import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ictlogo from "../assets/images/ictlogo.jpg";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <LinkContainer to={"/"}>
          <Navbar.Brand>
            <Image src={ictlogo}></Image>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{ color: "black" }}>
              Our Companies
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "black" }}>
              AboutUs
            </Nav.Link>
          </Nav>
          <Nav>
            <LinkContainer to={"/login"}>
              <Nav.Link>
                <Button variant="light">Login</Button>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/register"}>
              <Nav.Link>
                <Button variant="light">Register</Button>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
