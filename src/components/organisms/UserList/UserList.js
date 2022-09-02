import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem.js';
import styles from './UserList.module.scss';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUser = users.filter((user) => user.name !== name);
    setUsers(filteredUser);
  };

  return (
    <div className={styles.wrapper}>
      <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
      <ul className={styles.userList}>
        {users.map((userData) => (
          <UserListItem
            key={userData.name}
            userData={userData}
            deleteUser={deleteUser}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
ra;
