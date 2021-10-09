import React, { memo } from "react";
import { useRouter } from "next/router";
import { NavList, BrandImage } from "./Nav.styled";
import Link from "next/link";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { useSessionData } from "#root/src/components/session/SessionContext";
import { loginUser } from "#root/src/actions/loginUser";

const LINKS_LOGGED_IN = [
  { to: "/", text: "Home" },
  { to: "/results", text: "Results" },
  { to: "/scripts", text: "Scripts" },
  { to: "/profile", text: "Profile" },
  { to: "/", text: "Logout", action: "signOut", preventHighlight: true },
];

const LINKS_LOGGED_OFF = [
  { to: "/", text: "Home" },
  {
    to: "/",
    text: "Login",
    action: "signIn",
    preventHighlight: true,
  },
];

const Navs = () => {
  const { asPath } = useRouter();
  const { loginData, loginModal } = useSessionData();
  const { login, setLogin } = loginData;
  const { openLoginModal, setOpenLoginModal } = loginModal;
  console.log(asPath);

  const signInUser = () => {
    setLogin(loginUser());
    setOpenLoginModal(true);
  };

  const signOutUser = () => {
    setLogin();
  };

  const determineOnClick = (link) => {
    switch (link.action) {
      case "signIn":
        return signInUser;
      case "signOut":
        return signOutUser;
    }
  };

  const buildLinks = (links) => {
    return (
      <>
        {links.map((link) => (
          <Link key={link.text} href={link.to ? link.to : "#"} passHref>
            <Nav.Link
              href={link.to}
              className={`nav-link ${
                link.to === asPath && !link.preventHighlight ? "active" : ""
              }`}
              onClick={link.action ? determineOnClick(link) : ``}
            >
              {link.text}
            </Nav.Link>
          </Link>
        ))}
      </>
    );
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Ho'omau</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            {login ? buildLinks(LINKS_LOGGED_IN) : buildLinks(LINKS_LOGGED_OFF)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default memo(Navs);
