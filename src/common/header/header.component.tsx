import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import logo from '../../images/eshop-logo.png';
import './header.css';
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Header = (props: any) => {

  return (
    <Navbar bg="light" variant="light" fixed="top" className="mb-3">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="eshop"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link active={true}>
              <Link to="/">Home</Link>
            </Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mobiles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Laptops</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fashion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cosmetics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Footware</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
            <Nav.Link><Link to="/about-us">About Us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Nav className="mx-4">
        <Nav.Link href="#link">Sign Up</Nav.Link>
        <Nav.Link href="#link">Sign In</Nav.Link>
      </Nav>
    </Navbar>
  );

}

export default Header;