import { capitalizeFirstLetter } from "./utils/firstCapsRestLower";
export const Columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
    //cell property controls whats rendered in the UI
    Cell:({value})=> {return capitalizeFirstLetter(value) }

  },
  {
    Header: "Code",
    accessor: "code",
    Cell:({value})=> {return capitalizeFirstLetter(value) }

  },
  {
    Header: "Profession",
    accessor: "profession",
    Cell:({value})=> {return capitalizeFirstLetter(value) }

  },
  {
    Header: "Color",
    accessor: "color",
  },
  {
    Header: "City",
    accessor: "city",
    Cell:({value})=> {return capitalizeFirstLetter(value) }

  },
  {
    Header: "Branch",
    accessor: "branch",
    Cell:({value})=> {return capitalizeFirstLetter(value) }
  },
  {
    Header: "Assigned",
    accessor: "assigned",
    Cell:({value})=> {return value.toUpperCase() }

  },
];
