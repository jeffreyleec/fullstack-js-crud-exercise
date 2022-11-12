import React, { useContext, useState } from "react";
import UserRetrieve from "../apis/UserRetrieve";
import { UsersContext } from "../context/UsersContext";
import "../components/styles/deleteUser.css";

export const DeleteUser = () => {
  const { users, setUsers } = useContext(UsersContext);

  const [id, setID] = useState("");

  //  const result = confirm("Want to delete?");
  // if (result) {
  //     //Logic to delete the item
  // }

  const handleDelete = async (id) => {
    const result = window.confirm("Are you sure to delete?");
    if (result) {
      try {
        const response = await UserRetrieve.delete(`/user/${id}`);
        console.log(response);

        setUsers(
          users.filter((user) => {
            return user.id !== id;
          })
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="deleteUserContainer">
      <p className="deleteTitle">Delete Employee </p>
      <form>
        <div className="form-row">
          <div className="col">
            <input
              value={id}
              onChange={(e) => setID(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Enter ID"
            />
          </div>

          <div>
            <button
            className="add-user-btn"
              disabled={!id}
              onClick={() => handleDelete(id)}
              type="submit"
            >
              ❌
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
