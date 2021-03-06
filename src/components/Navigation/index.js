import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  const featureLinksControl = token ? (
    <>
      <NavbarItem path="/" linkText="Home" />
      <NavbarItem path="/compare" linkText="Compare" />
      <NavbarItem path="/stats" linkText="Stats" />
    </>
  ) : (
    <>
      <NavbarItem path="/" linkText="Home" />
      <NavbarItem path="/login" linkText="Compare" />
      <NavbarItem path="/login" linkText="Stats" />
    </>
  );

  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%" }} fill>
            {featureLinksControl}
            {loginLogoutControls}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron fluid></Jumbotron>
    </div>
  );
}
