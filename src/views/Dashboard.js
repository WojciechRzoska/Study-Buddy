import UserList from 'components/organisms/UserList/UserList';
import React, { useContext } from 'react';
import styles from 'assets/styles/ViewWrapper.module.scss';
import { UsersContext } from 'providers/UsersProvides';

const Dashboard = () => {
  const { users } = useContext(UsersContext);
  return (
    <div className={styles.viewWrapper}>
      <UserList users={users} />
    </div>
  );
};

export default Dashboard;
