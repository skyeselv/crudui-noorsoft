import React from "react";

import "./DataTable.css";

export const DataTable = (props) => {
  const handleDeleteUser = (id) => {
    let answer = window.confirm("Are you sure?");
    if (answer) {
      props.deleteUser(id);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Login</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.Email}</td>
              <td>{user.Login}</td>
              <td>{user.Age}</td>
              <td>
                <button
                  className="button-edit"
                  onClick={() => {
                    props.editRow(user);
                  }}
                >
                  Edit
                </button>
                <button
                  className="button-delete"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
