import "./Navbar.css";
import { Link } from "react-router-dom";
import { InfoCircleOutlined, BookOutlined } from "@ant-design/icons";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbars() {

  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="/">InvestMint</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/info" className="nav-link"><InfoCircleOutlined className="nav__icon" />Info</Nav.Link>
            <Nav.Link href="/resources" className="nav-link"><BookOutlined className="nav__icon" />Resources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    // <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       InvestMint
    //     </Link>
    //     <button
    //       type="button"
    //       className="navbar-toggler"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbar"
    //       aria-controls="navbarTogglerDemo02"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbar">
    //       <ul className="navbar-nav mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className="nav-link active" aria-current="page" to="/info">
    //             <InfoCircleOutlined className="nav__icon" />
    //             Info
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             className="nav-link active"
    //             aria-current="page"
    //             to="/resources"
    //           >
    //             <BookOutlined className="nav__icon" />
    //             Resources
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>


  );
}
