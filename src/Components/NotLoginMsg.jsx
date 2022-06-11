import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotLoginMsg = () => {
  return (
    <Container className="w-100" style={{ padding: "3rem 0" }}>
      <Card className="w-50 mx-auto">
        <Card.Body>
          <Card.Title> Caution </Card.Title>
          <Card.Text>
            Please Login <Link to="/"> Click here.... </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NotLoginMsg;
