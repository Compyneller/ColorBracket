import React from "react";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserDetail from "../Components/UserDetail";

const UserDetailPage = () => {
  const userDetailStore = useSelector((state) => state.userDetailStore);
  const { loading, userDetail } = userDetailStore;
  return (
    <Container
      className="d-flex  align-items-center  flex-column"
      style={{ minHeight: "92vh" }}
    >
      <Card className="w-100 my-5 shadow-sm">
        <Card.Body className="d-flex w-100 justify-content-between">
          <h3>User Details</h3>
          <Link to="/home">
            <Button variant="dark"> Back</Button>
          </Link>
        </Card.Body>
      </Card>
      {loading ? (
        <Spinner animation="border" role="status" />
      ) : (
        <div className="w-100 " style={{ padding: "0 1rem" }}>
          <UserDetail userDetail={userDetail} />
        </div>
      )}
    </Container>
  );
};

export default UserDetailPage;
