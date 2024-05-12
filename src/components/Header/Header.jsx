import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import { Axios } from "../../Api/Axios";
import { CAT } from "../../Api/api";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";

export const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Axios.get(CAT).then((data) => setCategories(data?.data?.categories));
  }, []);

  const showCategories = categories?.map((category, key) => (
    <NavLink
      to={`/category/${category.id}`}
      key={key + "e4"}
      className="m-0 text-decoration-none text-black p-0"
    >
      {category.name}
    </NavLink>
  ));
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} style={{ width: "90px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-lg-5 d-lg-flex align-items-center gap-4 flex-wrap">
            <NavLink className="m-0 text-decoration-none text-black p-0" to="/">
              Home
            </NavLink>

            {showCategories}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
