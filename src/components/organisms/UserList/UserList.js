import React from 'react';
import UserListItem from 'components/molecules/UserListItem/UserListItem.js';
import styles from './UserList.module.scss';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';

const UserList = ({ users }) => {
  return (
    <div className={styles.wrapper}>
      <Title>Students List</Title>
      <ul className={styles.userList}>
        {users.map((userData) => (
          <UserListItem key={userData.name} userData={userData} />
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
