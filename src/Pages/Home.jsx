import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOfAllUserAction } from "../action/listOfAllUserAction";
import { Container, Form, InputGroup, Spinner } from "react-bootstrap";
import TableComp from "../Components/TableComp";
import { useNavigate } from "react-router-dom";
import NotLoginMsg from "../Components/NotLoginMsg";

const Home = () => {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(listOfAllUserAction());
  }, [auth]);

  // ========================allUserList===========================

  const listOfAllUser = useSelector((state) => state.listOfAllUserStore);
  const { loading, user } = listOfAllUser;

  // ==============================SearchFunction================================
  function search(datas) {
    return datas?.filter(
      (data) =>
        data.name.toLowerCase().indexOf(query) > -1 ||
        data.company.toLowerCase().indexOf(query) > -1 ||
        data.designation.toLowerCase().indexOf(query) > -1
    );
  }
  const data = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    data?.length > 0 ? setAuth(true) : setAuth(false);
  }, []);

  return (
    <>
      {auth ? (
        <Container
          className="d-flex align-items-center  flex-column"
          style={{ minHeight: "92vh" }}
        >
          <InputGroup className="my-3">
            <InputGroup.Text id="basic-addon1">
              <img
                src="https://img.icons8.com/material-outlined/2x/search--v2.gif"
                height={20}
                style={{ mixBlendMode: "darken" }}
                alt=""
              />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputGroup>
          {loading ? (
            <Spinner animation="border" role="status" />
          ) : (
            <div className="w-100">
              <TableComp user={search(user)} />
            </div>
          )}
        </Container>
      ) : (
        <NotLoginMsg />
      )}
    </>
  );
};

export default Home;
