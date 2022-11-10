import React from "react";
import { AddUser } from "../components/AddUser";
import { Header } from "../components/Header";
import { SuperTable } from "../components/SuperTable";
// import { SuperTable } from './components/SuperTable';
// import {Table} from '../components/Table'
import {DeleteUser} from '../components/DeleteUser'
export const Home = () => {
  return (
    <div>
      <Header />
      <AddUser />
      <SuperTable />
      <DeleteUser />
      {/* <Table /> */}
    </div>
  );
};