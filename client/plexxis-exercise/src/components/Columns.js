// import UserRetrieve from "../apis/UserRetrieve"

// const handleDelete = async (id) => {
// try{
//   const response = await UserRetrieve.delete(`/user/${id}`)
//   console.log(response)
// }catch(err){
// console.log(err)
// }
// }

export const Columns = 
[
  {
    Header: "ID",
    accessor: "id"
    
  },
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Code",
    accessor: "code"
  },
  {
    Header: "Profession",
    accessor: "profession"
  },
  {
    Header: "Color",
    accessor: "color"
  },
  {
    Header: "City",
    accessor: "city"
  },
  {
    Header: "Branch",
    accessor: "branch"
  },
  {
    Header: "Assigned",
    accessor: "assigned"
   }, 
 
  // {
  //   Header: "Delete",
  //   accessor:  "delete",
    
  //   Cell: (value)=> (
  //   // <span onClick={() => {
  //   //           let data = this.state.data;
  //   //           console.log(this.state.data[row.index]);
  //   //           data.splice(row.index, 1)
  //   //           this.setState({data})
  //   //         }}>
  //   // <span onClick={(row) => handleDelete(row.id)}
  //   // className="btn btn-danger">
  //   <span onClick={(value)=> console.log(value)}
  //   className="btn btn-danger">
  //             Delete
  //           </span> 
  //   ) 
  // },
]

