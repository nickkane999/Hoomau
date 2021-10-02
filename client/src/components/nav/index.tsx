import React, { memo } from "react";
import { useRouter } from "next/router";
import { NavList, BrandImage } from "./Nav.styled";
import Link from "next/link";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/results", text: "Results" },
  { to: "/scripts", text: "Scripts" },
  { to: "/profile", text: "Profile" },
];

const Navs = () => {
  const { asPath } = useRouter();
  console.log(asPath);

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Ho'omau</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            {LINKS.map((link) => (
              <Link key={link.to} href={link.to}>
                <Nav.Link
                  href={link.to}
                  className={`nav-link ${link.to === asPath ? "active" : ""}`}
                >
                  {link.text}
                </Nav.Link>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default memo(Navs);
