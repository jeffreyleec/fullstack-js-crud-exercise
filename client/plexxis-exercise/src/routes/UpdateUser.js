import React, { useContext, useEffect, useState } from "react";
import UserRetrieve from "../apis/UserRetrieve";
import { UsersContext } from "../context/UsersContext";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
export const UpdateUser = () => {
  const navigate = useNavigate();
  //controlled components
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [profession, setProfession] = useState("");
  const [color, setColor] = useState("");
  const [city, setCity] = useState("");
  const [branch, setBranch] = useState("");
  const [assigned, setAssigned] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await UserRetrieve.get(`/user/${id}`);
      //console.log(response.data.data[0].name);

      setName(response.data.data[0].name);
      setCode(response.data.data[0].code);
      setProfession(response.data.data[0].profession);
      setColor(response.data.data[0].color);
      setCity(response.data.data[0].city);
      setBranch(response.data.data[0].branch);
      setAssigned(response.data.data[0].assigned);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    //avoids reload when form submission
    e.preventDefault();

    try {
      const updateUser = await UserRetrieve.put(`/user/${id}`, {
        name,
        code,
        profession,
        color,
        city,
        branch,
        assigned,
      });
      navigate(`/`)
      //  addUser(response.data.data)
      console.log(updateUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      Update User
      <form>
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
              onClick={handleSubmit}
              type="submit"
              className="add-user-btn"
            >
              🖊
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

