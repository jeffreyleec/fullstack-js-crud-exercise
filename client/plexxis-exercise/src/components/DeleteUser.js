import React, { useContext, useState } from "react";
import UserRetrieve from "../apis/UserRetrieve";
import { UsersContext } from "../context/UsersContext";

export const DeleteUser = () => {
  const {users, setUsers} = useContext(UsersContext)

  const [id, setID] = useState("");




const handleDelete = async (id) => {
  // e.preventDefault()
  // console.log('test working', id)
try{
  const response = await UserRetrieve.delete(`/user/${id}`)
  console.log(response)
  setUsers(users.filter((user)=> {
    return user.id !== id;
  })
  );
}catch(err){
console.log(err)
}
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
     Delete a USER 
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
            <button onClick={()=>handleDelete(id)} type="submit" >❌</button>
          </div>
        </div>
      </form>
    </div>
  );
};