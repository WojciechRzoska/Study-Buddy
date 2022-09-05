import React, { useState } from 'react';
import styles from './Root.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { users as usersData } from 'data/users';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import AddUser from './AddUser';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUser = users.filter((user) => user.name !== name);
    setUsers(filteredUser);
  };

  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([...users, newUser]);
    setFormValues(initialFormState);
  };
  return (
    <Router>
      <MainTemplate>
        <div className={styles.wrapper}>
          <Routes>
            <Route
              path="/add-user"
              element={
                <AddUser
                  formValues={formValues}
                  handleAddUser={handleAddUser}
                  handleInputChange={handleInputChange}
                />
              }
            ></Route>
            <Route
              path="/"
              element={<Dashboard deleteUser={deleteUser} users={users} />}
            ></Route>
          </Routes>
        </div>
      </MainTemplate>
    </Router>
  );
};

export default Root;
