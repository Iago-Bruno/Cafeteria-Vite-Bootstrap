import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const expand = true;

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/home">Salento</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
              <Link className="nav-link" to={"/cardapio"}>
                Cardápio
              </Link>
              <Link className="nav-link" to={"/clientes"}>
                Cliente
              </Link>
              <Link className="nav-link" to={"/sobre"}>
                Sobre
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
