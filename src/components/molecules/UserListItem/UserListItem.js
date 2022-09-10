import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './UserListItem.module.scss';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import Average from 'components/atoms/Average/Average';
import { UsersContext } from 'providers/UsersProvider';

const UserListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <li className={styles.wrapper}>
      <div>
        <Average average={average} />
      </div>
      <div className={styles.userInfo}>
        <p>{name}</p>
        <p>attendance:{attendance}</p>
      </div>
      <DeleteButton onClick={() => deleteUser(name)} />
    </li>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
