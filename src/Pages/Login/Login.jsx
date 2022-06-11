import React, { useState } from "react";
import { Container } from "react-bootstrap";

import LoginForm from "../../Components/LoginForm";
import "./Login.css";
import video from "../../Assets/Untitled (1).mp4";
const Login = ({ setAuth }) => {
  return (
    <div className="MainContainer">
      <video muted autoPlay loop src={video} />
      <div
        className=" d-flex align-items-center justify-content-center"
        style={{ minHeight: "92vh", zIndex: "5" }}
      >
        <Container className=" d-flex align-items-center justify-content-center">
          <LoginForm setAuth={setAuth} />
        </Container>
      </div>
    </div>
  );
};

export default Login;
