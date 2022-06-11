import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = ({ setAuth }) => {
  const logUser = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" className="text-light" style={{ height: "8vh" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://img.icons8.com/ios-glyphs/2x/facial-recognition-scan--v2.gif"
            width="50"
            height="50"
            className="d-inline-block align-top"
            style={{ filter: "invert(1)", mixBlendMode: "lighten" }}
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        {logUser?.map((items) => {
          return <h5 className="text-center">Welcome {items.name}</h5>;
        })}
        <Button
          variant="danger"
          onClick={() => {
            localStorage.removeItem("userInfo");
            navigate("/");
          }}
        >
          Logout
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
