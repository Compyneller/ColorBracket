import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDetailAction } from "../action/userDetailAction";

const TableComp = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Table
      className="text-center w-100"
      responsive
      bordered
      hover
      style={{ textTransform: "capitalize" }}
    >
      <thead className="bg-dark text-light">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>company</th>
          <th>designation</th>
          <th>company logo</th>
        </tr>
      </thead>
      <tbody>
        {user?.map((items) => {
          return (
            <tr
              onClick={() => {
                dispatch(userDetailAction(items.id));
                navigate("/userdetails");
              }}
            >
              <td>{items.id}</td>
              <td onClick={() => dispatch(userDetailAction(items.id))}>
                {items.name}
              </td>
              <td>{items.company}</td>
              <td>{items.designation}</td>
              <td className="d-flex">
                <img
                  className="mx-auto"
                  src={items.company_logo}
                  height={50}
                  alt=""
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableComp;
