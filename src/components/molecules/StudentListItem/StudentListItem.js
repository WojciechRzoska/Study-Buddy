import React from 'react';
import PropTypes from 'prop-types';
import styles from './StudentListItem.module.scss';
import Average from 'components/atoms/Average/Average';

const StudentListItem = ({
  userData: { average, name, attendance = '0%' },
  ...props
}) => {
  return (
    <li className={styles.wrapper} {...props}>
      <div>
        <Average average={average} />
      </div>
      <div className={styles.userInfo}>
        <p>{name}</p>
        <p>attendance:{attendance}</p>
      </div>
    </li>
  );
};

StudentListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default StudentListItem;
