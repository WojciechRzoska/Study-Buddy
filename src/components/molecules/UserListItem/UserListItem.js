import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserListItem.module.scss';
import Button from 'components/atoms/Button/Button';
import Average from 'components/atoms/Average/Average';

const UserListItem = ({
  deleteUser,
  userData: { average, name, attendance = '0%' },
}) => {
  return (
    <li className={styles.wrapper}>
      <div>
        <Average average={average} />
      </div>
      <div className={styles.userInfo}>
        <p>{name}</p>
        <p>attendance:{attendance}</p>
      </div>
      <Button onClick={() => deleteUser(name)} />
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
