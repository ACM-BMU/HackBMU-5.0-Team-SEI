import "./Navbar.css";
import { Link } from "react-router-dom";
import { InfoCircleOutlined, BookOutlined } from "@ant-design/icons";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbars() {

  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="/">INVESTMINT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/info" className="nav-link"><InfoCircleOutlined className="nav__icon" />Info</Nav.Link>
            <Nav.Link href="/news" className="nav-link"><InfoCircleOutlined className="nav__icon" />News</Nav.Link>
            <Nav.Link href="/resources" className="nav-link"><BookOutlined className="nav__icon" />Resources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
