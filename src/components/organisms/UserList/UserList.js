import React from 'react';
import UserListItem from 'components/molecules/UserListItem/UserListItem.js';
import styles from './UserList.module.scss';

const UserList = ({ users, deleteUser }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1> Students List</h1>
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
    </>
  );
};

export default UserList;
