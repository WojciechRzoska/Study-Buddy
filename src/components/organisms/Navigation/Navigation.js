import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <h1>
          Study <br />
          Buddy
        </h1>
      </div>
      <Link className={styles.links} to="/">
        Dashboard
      </Link>
      <Link className={styles.links} to="/add-user">
        Add user
      </Link>
    </div>
  );
};

export default Navigation;
