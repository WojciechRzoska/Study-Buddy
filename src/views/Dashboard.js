import UserList from 'components/organisms/UserList/UserList';
import React from 'react';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import styles from 'assets/styles/ViewWrapper.module.scss';

const Dashboard = ({ users, deleteUser }) => {
  return (
    <div className={styles.viewWrapper}>
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
