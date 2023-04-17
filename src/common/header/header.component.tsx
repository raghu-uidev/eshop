import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas, OverlayTrigger, Popover } from "react-bootstrap";
import logo from '../../images/eshop-logo.png';
import './header.css';
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import CartIcon from "../../modules/@cart/cart-icon/cart-icon.component";
const Header = (props: any) => {
  const navigate = useNavigate();
  const { loginStatus } = useAppSelector(state => state.userData);
  const { success } = loginStatus;
  const token = localStorage.getItem('token');
  const onSignOut = () => {
      localStorage.clear();
      navigate('/');
      window.location.reload();
  }
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
              <Link className="dropdown-item" to="/products/smartphones">Mobiles</Link>
              <Link className="dropdown-item" to="/products/laptops">Laptops</Link>
              <Link className="dropdown-item" to="/products/fashion">Fashion</Link>
              <Link className="dropdown-item" to="/products/skincare">Cosmetics</Link>
              <Link className="dropdown-item" to="/products/footware">Footware</Link>
              <Link className="dropdown-item" to="/products/kids">Kids</Link>
            </NavDropdown>
            <Link to="/blog">Blog</Link>
            <Link to="/about-us">About Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Nav className="mx-4">
        {
          success || token ? (
            <>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover id={`popover-positioned-bottom`}>
                    <Popover.Body>
                      <Link className="dropdown-item" to="/">My Details</Link>
                      <Link className="dropdown-item" to="/">My Order</Link>
                      <Link className="dropdown-item" to="/">My Wishlist</Link>
                      <Button className="dropdown-item sign-out-btn" onClick={() => onSignOut()}>Sign Out</Button>
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="secondary" className="user-icon-btn"><FaRegUserCircle className="user-icon" /></Button>
              </OverlayTrigger>
              <CartIcon />
            </>
          ) :
            (
              <>
                <Link to="/sign-up">Sign Up</Link>
                <Link to="/sign-in">Sign In</Link>
              </>
            )
        }
      </Nav>
    </Navbar>
  );

}

export default Header;