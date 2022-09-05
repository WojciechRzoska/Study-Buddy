import React from 'react';
import UserListItem from 'components/molecules/UserListItem/UserListItem.js';
import styles from './UserList.module.scss';
import PropTypes from 'prop-types';
import { UserShape } from 'types';

const UserList = ({ users, deleteUser }) => {
  return (
    <div className={styles.wrapper}>
      <h1>Students List</h1>
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

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UserList;
