import React, { useContext, useState } from "react";
import UserRetrieve from "../apis/UserRetrieve";
import { UsersContext } from "../context/UsersContext";
import { useNavigate } from "react-router-dom";

export const EditUser = () => {
  const { users, setUsers } = useContext(UsersContext);
  const navigate = useNavigate();

  const [id, setID] = useState("");

  const handleEdit = (id) => {
    navigate(`/user/update/${id}`);
  };

  return (
    <div>
      EDIT/UPDATE User Information
      <form>
        <div className="form-row">
          <div className="col">
            <input
              value={id}
              onChange={(e) => setID(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter ID"
            />
          </div>

          <div>
            <button onClick={() => handleEdit(id)} type="submit">
              🖊
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
