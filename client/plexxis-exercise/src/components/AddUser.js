import React, { useContext, useState } from "react";
import UserRetrieve from "../apis/UserRetrieve";
import { UsersContext } from "../context/UsersContext";
import "../components/styles/addUser.css";


export const AddUser = () => {
  const { users, setUsers } = useContext(UsersContext);
  //controlled components
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [profession, setProfession] = useState("");
  const [color, setColor] = useState("");
  const [city, setCity] = useState("");
  const [branch, setBranch] = useState("");
  const [assigned, setAssigned] = useState("");

  const addUser = (newUser) => {
    setUsers([...users, newUser])
  }

  const handleSubmit = async (e) => {
    //avoids reload when form submission
    e.preventDefault();

    try {
      const response = await UserRetrieve.post("/user", {
        name,
        code,
        profession,
        color,
        city,
        branch,
        assigned,
      });
      addUser(response.data.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addUserContainer">
      <p className="addTitle">Add Employee</p>
      <form className="addForm">
        <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Code"
            />
          </div>
          <div className="col">
            <input
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Profession"
            />
          </div>
          <div className="col">
            <input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Color"
            />
          </div>
          <div className="col">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              className="form-control"
              placeholder="City"
            />
          </div>
          <div className="col">
            <input
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Branch"
            />
          </div>
          <div className="col">
            <select
              value={assigned}
              onChange={(e) => setAssigned(e.target.value)}
              className="form-control"
            >
              <option hidden value="">
                Assigned
              </option>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
          <div>
            <button
              disabled={
                !name ||
                !code ||
                !profession ||
                !color ||
                !city ||
                !branch ||
                !assigned
              }
              onClick={handleSubmit}
              type="submit"
              className="add-user-btn"
            >
              ➕
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
