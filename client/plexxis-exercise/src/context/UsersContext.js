import React, {useState, createContext} from "react"

export const UsersContext = createContext();

export const UsersContextProvider = props => {
  const [users, setUsers] = useState([])

const addUser = (newUser) => {
  setUsers([...users, newUser])
}



  return (
    <UsersContext.Provider value={{users, setUsers, addUser}}>
      {props.children}
    </UsersContext.Provider>
  )
}