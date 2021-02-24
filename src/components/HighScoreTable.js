import React, { useMemo } from "react";
import { useTable } from "react-table";
import { useSelector } from "react-redux";

const HighScoreTable = ({ columns }) => {
  const users = useSelector((state) => state.allUsers.users);
  const cols = useMemo(() => columns, [columns]);
  const data = useMemo(
    () =>
      users.sort((user1, user2) => {
        return user2.point - user1.point;
      }),
    [users]
  );

  const tableInstance = useTable({ columns: cols, data: data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps} key={index}>
            {headerGroup.headers.map((column, index) => (
              <th {...column.getHeaderProps} key={index}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps} key={index}>
              {row.cells.map((cell, index) => {
                return (
                  <td {...cell.getCellProps} key={index}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default HighScoreTable;
