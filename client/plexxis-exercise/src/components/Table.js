import React, { useMemo } from "react";
import { useTable } from "react-table";
import { mockData } from "./mockData";
import { Columns } from "./Columns";
import "./styles/table.css";

export const Table = () => {
  //only refresh on memoized value changes
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => mockData, []);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  function addUser(newUser) {
    mockData.push(newUser);
  }
  function deleteUser() {
    mockData.pop();
  }

  const user1 = {
    id: 1,
    name: "Kyle Lowry",
    code: "F100",
    profession: "Drywall Installer",
    color: "#FF6600",
    city: "Brampton",
    branch: "Abacus",
    assigned: true,
  };
  return (
    // apply the table props
    <>
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <button onClick={addUser(user1)} type="button">
        ADD
      </button>
      <button onClick={deleteUser()} type="button">
        Delete
      </button>
    </>
  );
};
