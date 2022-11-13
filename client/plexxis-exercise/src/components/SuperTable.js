import React, { useMemo, useEffect, useContext } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { Columns } from "./Columns";
import "./styles/table.css";
import UserRetrieve from "../apis/UserRetrieve";
import { UsersContext } from "../context/UsersContext";
import { Header } from "./Header";

export const SuperTable = (props) => {
  const { users, setUsers } = useContext(UsersContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserRetrieve.get("/user");
        // console.log(response.data.data);
        setUsers(response.data.data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  //only refresh on memoized value changes
  const columns = useMemo(() => Columns, []);
  //  const data = useMemo(() => mockData, []);
  const data = useMemo(() => users, [users]);

  const tableInstance = useTable({ columns, data }, useSortBy, usePagination);

  const {
    getTableProps,
    getTableBodyProps,
    pageOptions,
    setPageSize,
    state,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
  } = tableInstance;

  const { pageIndex, pageSize } = state;

  return (
    // apply the table props
    <>
      <Header title="Employee Database" subTitle="React Table" />
      {/* Number Of employees loaded per page  */}
      <select
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {[5, 10, 20].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
      <table {...getTableProps()} className="mainTable">
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
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "🔽"
                            : "🔼"
                          : ""}
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
        {/* pagnation */}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}{" "}
          </strong>
        </span>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          type="button"
        >
          Previous
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          type="button"
        >
          Next
        </button>
      </div>
    </>
  );
};
