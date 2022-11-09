import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { mockData } from "./mockData";
import { Columns } from "./Columns";
import "./styles/table.css";

export const SuperTable = () => {


  //only refresh on memoized value changes
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => mockData, []);



  const tableInstance = useTable({ columns, data }, useSortBy, usePagination);

  const { getTableProps, getTableBodyProps, pageOptions, state, headerGroups, page, nextPage, previousPage, canNextPage, canPreviousPage,  prepareRow } =
    tableInstance;

    const {pageIndex} = state
  // function addUser(newUser) {
  //   mockData.push(newUser);
  // }
  // function deleteUser() {
  //   mockData.pop();
  // }

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
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {
                        // Render the header
                        column.render("Header")
                      }
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                      </span>
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
            page.map((row) => {
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
      <div>
        <span>
          Page{' '}
          <strong>
            {pageIndex+1} of {pageOptions.length} {" "}
          </strong>
        </span>
      <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
      <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
      </div>
     
    </>
  );

  // <table {...getTableProps}>
  //   <thead>
  //     {headerGroups.map((headerGroup) => (
  //       <tr>
  //         {" "}
  //         {...headerGroup.getHeaderGroupProps()}
  //         {headerGroup.headers.map((column) => (
  //           <th {...column.getHeaderProps()}>{column.render("Header")}</th>
  //         ))}
  //       </tr>
  //     ))}
  //   </thead>

  //   <tbody {...getTableBodyProps()}>
  //     {rows.map((row) => {
  //       prepareRow(row);
  //       return (
  //         <tr {...row.getRowProps()}>
  //           {row.cells.map((cell) => {
  //             return <td {...getCellProps()}>{cell.render("Cell")}</td>;
  //           })}
  //         </tr>
  //       );
  //     })}
  //   </tbody>
  // </table>
};
