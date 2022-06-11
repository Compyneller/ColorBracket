import React, { useEffect, useState } from "react";
import { Button, Card, Form, InputGroup, Spinner } from "react-bootstrap";
import { userLoginAction } from "../action/userLoginAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLoginData = useSelector((state) => state.userLoginStore);
  const { loading, logUser } = userLoginData;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLoginAction(username, pass));
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo"));
    if (data?.length > 0) {
      navigate("/home");
    }
  }, [localStorage.getItem("userInfo")]);

  return (
    <Card className=" customForm text-center shadow-sm">
      <Card.Body>
        <h1 className="my-4">Login</h1>
        <form action="" onSubmit={(e) => handleLoginSubmit(e)}>
          <InputGroup className="mb-3  customForm mx-auto">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3  customForm mx-auto">
            <Form.Control
              placeholder="Password"
              aria-label="Username"
              aria-describedby="basic-addon1"
              required
              onChange={(e) => setPass(e.target.value)}
            />
          </InputGroup>
          <Button className="mb-4 mt-1" variant="primary" type="submit">
            {loading ? <Spinner animation="border" role="status" /> : "Submit"}
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
