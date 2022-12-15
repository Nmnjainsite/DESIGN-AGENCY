import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import "./Nav.css";
function HeaderNav() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ inset: 0, padding: "3rem" }}>
      <Navbar.Brand
        style={{
          font: "Roboto sans-serif 900 40px/30px Gilroy",
        }}
      >
        DESIGN
        <p
          style={{
            textAlign: "left",
            font: "Roboto sans-serif 30px/30px Gilroy",
            fontSize: "1.8rem",
            fontWeight: "lighter",
          }}
        >
          AGENCY
        </p>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <span className="nav-items">Specialize in</span>
          <span className="nav-items"> Case Study</span>
          <span className="nav-items"> Process</span>
          <span className="nav-items"> Industries</span>
        </Nav>
        <Nav>
          <Button className="btn-nav">Schedule A Call</Button>
          <Button className="btn-nav">We are Hiring</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderNav;
