// import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import style from "./navigation.module.css";
import Link from "next/link";
import Image from "next/image";

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      bg="light"
      data-bs-theme="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Image
            width={55}
            height={55}
            objectFit="cover"
            src={logo}
            alt="nibrash logo"
          />
          <span className={style.logoName}>
            <span style={{ color: "#df3639" }}>
              <span style={{ fontSize: "28px" }}>L</span>ive
            </span>
            agro
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav className={`${style.nav_item}`}>
            <Nav.Item>
              <Link href="/#home">
                <a className="nav-link">Home</a>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/#about">
                <a className="nav-link">About</a>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/#services">
                <a className="nav-link">Services</a>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
