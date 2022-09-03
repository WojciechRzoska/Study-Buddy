import React, { useState } from 'react';
import UserList from 'components/organisms/UserList/UserList';
import styles from './Root.module.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { users as usersData } from 'data/users';
import Form from 'components/organisms/Form/Form';

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
      <div className={styles.wrapper}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-user">Add user</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<UserList deleteUser={deleteUser} users={users} />}
          ></Route>
          <Route
            path="/add-user"
            element={
              <Form
                formValues={formValues}
                handleAddUser={handleAddUser}
                handleInputChange={handleInputChange}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Root;
