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
            <Link to="/">Home</Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/products/mobiles">Mobiles</Link>
              <Link className="dropdown-item" to="/products/laptops">Laptops</Link>
              <Link className="dropdown-item" to="/products/fashion">Fashion</Link>
              <Link className="dropdown-item" to="/products/cosmetics">Cosmetics</Link>
              <Link className="dropdown-item" to="/products/footware">Footware</Link>
              <Link className="dropdown-item" to="/products/kids">Kids</Link>
            </NavDropdown>
            <Link  to="/blog">Blog</Link>
            <Link  to="/about-us">About Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Nav className="mx-4">
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/sign-up">Sign In</Link>
      </Nav>
    </Navbar>
  );

}

export default Header;