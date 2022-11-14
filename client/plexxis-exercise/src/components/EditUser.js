import React, { useContext, useState } from "react";
import UserRetrieve from "../apis/UserRetrieve";
import { UsersContext } from "../context/UsersContext";
import { useNavigate } from "react-router-dom";
import "../components/styles/editUser.css";

export const EditUser = () => {
  const { users, setUsers } = useContext(UsersContext);
  const navigate = useNavigate();

  const [currentid, setID] = useState("");

  const handleEdit = (currentid) => {

    if (users.find((obj)=> obj.id === parseInt(currentid))) {
      console.log("we have a match!!");
      return navigate(`/user/update/${currentid}`);
    } else {
      console.log("err 404");
      alert("not found");
    }
  };

  return (
    <div className="editUserContainer">
      <p className="editTitle">EDIT Employee </p>
      <form>
        <div className="form-row">
          <div className="col">
            <input
              value={currentid}
              onChange={(e) => setID(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Enter ID"
              required
            />
          </div>

          <div>
            <button
              className="add-user-btn"
              disabled={!currentid}
              onClick={() => handleEdit(currentid)}
              type="button"
            >
              🖊
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
