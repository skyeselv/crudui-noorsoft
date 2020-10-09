import React, { useEffect, useState } from "react";
import Axios from "axios";
import { DataTable } from "../DataTable/DataTable";
import { FormAdd } from "../FormAdd/FormAdd";
import { FormEdit } from "../FormEdit/FormEdit";

import "./App.css";

const App = () => {
  const [values, setValues] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const prepareData = (data) => {
    return data.map((value) => ({
      id: value._id,
      ...value.data,
    }));
  };

  const getData = async () => {
    const users = await Axios.get("http://178.128.196.163:3000/api/records/");
    const unpreparedData = users.data;
    setValues(prepareData(unpreparedData));
  };

  const addUser = (user) => {
    Axios.put("http://178.128.196.163:3000/api/records/", { data: user });
    setValues([...values, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    Axios.delete(`http://178.128.196.163:3000/api/records/${id}`);
    setValues(values.filter((user) => user.id !== id));
  };

  const editUser = (id, updatedUser) => {
    setEditing(false);
    Axios.post(`http://178.128.196.163:3000/api/records/${id}`, {
      data: updatedUser,
    });
    setValues(values.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      Login: user.Login,
      Email: user.Email,
      Age: user.Age,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="block form">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <FormEdit
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                editUser={editUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <FormAdd addUser={addUser} />
            </div>
          )}
        </div>
        <div className="block table">
          <h2>View users</h2>
          <DataTable users={values} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
