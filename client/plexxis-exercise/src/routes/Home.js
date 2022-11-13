import React from "react";
import { AddUser } from "../components/AddUser";
import { SuperTable } from "../components/SuperTable";
import { DeleteUser } from "../components/DeleteUser";
import { EditUser } from "../components/EditUser";
import "../components/styles/home.css";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="sideBar">
          <AddUser />
          <DeleteUser />
          <EditUser />
        </div>
        <div className="tableContainer">
          <SuperTable />
        </div>
      </div>
    </>
  );
};
