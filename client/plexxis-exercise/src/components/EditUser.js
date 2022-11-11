import React, { useContext, useState } from "react";
import UserRetrieve from "../apis/UserRetrieve";
import { UsersContext } from "../context/UsersContext";
import { useNavigate } from 'react-router-dom';

export const EditUser = () => {
  const {users, setUsers} = useContext(UsersContext)
  const navigate = useNavigate();

  const [id, setID] = useState("");




// const handleEdit = async (id) => {
//   // e.preventDefault()
//   // console.log('test working', id)
// try{
//   const response = await UserRetrieve.put(`/user/${id}`)
//   console.log(response)
//   setUsers(users.filter((user)=> {
//     return user.id !== id;
//   })
//   );
// }catch(err){
// console.log(err)
// }
// }

const handleEdit = (id) => {

  navigate(`/user/update/${id}`);
}


// const handleSubmit = async (e) =>{
//   //avoids reload when form submission
//   e.preventDefault()

//   try{
//     const response = await UserRetrieve.post("/user", {
//       name,
//       code,
//       profession,
//       color,
//       city,
//       branch,
//       assigned,
//     })
//      addUser(response.data.data)
//     console.log(response)
//   }catch(err){
//     console.log(err)

//   }

// }

  
  return (
    <div>
     EDIT/UPDATE User Information
      <form>
        <div className="form-row">
          <div className="col">
            <input
              value={id}
              onChange={(e) => setID(e.target.value) }
           
              type="text"
              className="form-control"
              placeholder="Enter ID"
            />
          </div>
       
          <div>          
            <button onClick={()=>handleEdit(id)} type="submit" >🖊</button>
          </div>
        </div>
      </form>
    </div>
  );
};
