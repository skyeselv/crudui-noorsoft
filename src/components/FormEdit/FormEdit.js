import React, { useState, useEffect } from "react";

import "./FormEdit.css";

export const FormEdit = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.persist();
    props.editUser(user.id, user);
  };

  return (
    <div class="form-edit">
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
      <button className="button-update" onClick={handleSubmit}>
        Update
      </button>
      <button className="button-cancel" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </div>
  );
};
