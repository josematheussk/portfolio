import { Nav, Navbar } from "react-bootstrap";
import logosmall from "../images/logosmall.svg";
import "bootstrap/dist/css/bootstrap.css";

export default function NavComponent(){
    return(

        <Navbar bg="navBG" variant="dark" fixed="top" expand="xl">
        <Navbar.Brand href="/">
          <img src={logosmall} width="25px" height="25px" /> José Santos
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="collapse-wrapper">
          <Nav>
            <Nav.Link href="#about" className="nav-link">Sobre</Nav.Link>
            <Nav.Link href="#projects" className="nav-link">Projetos</Nav.Link>
            <Nav.Link href="contact" className="nav-link">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
}