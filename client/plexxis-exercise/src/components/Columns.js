import { capitalizeFirstLetter } from "./utils/firstCapsRestLower";
export const Columns = [
  {
    Header: "ID",
    accessor: "id",
    // Cell:({value})=> {return value +500}
  },
  {
    Header: "Name",
    accessor: "name",
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
