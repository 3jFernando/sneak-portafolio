import React from "react";
import { 
  Navbar,
  Container,
  Nav
} from 'react-bootstrap';

const LOGO = "/assets/logo/LogoTransparentNew.png";

function MenuNew() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img className="navbar-logo-brand" src={LOGO}></img>
          <span>CLAROS SOLUCIONES</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-md-center">
            <Nav.Link href="#bussines">Valores</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav.Link href="#portfolio">Portafolio</Nav.Link>
            <Nav.Link href="#services">Servicios</Nav.Link>
            <Nav.Link href="#clients">Clientes</Nav.Link>
            <Nav.Link href="#features">
              <a
                className="text-decoration-none getstarted scrollto"
                href="#about"
              >
                Cotizar
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNew;
