import React, { useState } from "react";

import "./FormAdd.css";

export const FormAdd = (props) => {
  const [user, setUser] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.persist();
    props.addUser(user);
  };

  return (
    <div class="form-add">
      <table>
        <tr>
          <label>Login</label>
          <input
            type="text"
            name="Login"
            value={user.Login}
            onChange={handleInputChange}
          />
        </tr>
        <tr>
          <label>Email</label>
          <input
            type="text"
            name="Email"
            value={user.Email}
            onChange={handleInputChange}
          />
        </tr>
        <tr>
          <label>Age</label>
          <input
            type="text"
            name="Age"
            value={user.Age}
            onChange={handleInputChange}
          />
        </tr>
      </table>
      <button className="button-submit" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};
