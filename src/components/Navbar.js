import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import ictlogo from '../assets/images/ictlogo.jpg'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Image src ={ictlogo}></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{ color: "black" }}>Companies</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "black" }}>Jobs</Nav.Link>
            <NavDropdown title="For Employers" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Employer Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Post A Job</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><Button variant="light">Login</Button></Nav.Link>
            <Nav.Link href="#deets"><Button variant="light">Register</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default CollapsibleExample;