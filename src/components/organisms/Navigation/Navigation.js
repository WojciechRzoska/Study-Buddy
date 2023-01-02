import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const auth = useAuth();
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <h1>
          Study <br />
          Buddy
        </h1>
      </div>
      <NavLink
        className={({ isActive }) =>
          [[styles.links], isActive ? [styles.active] : null]
            .filter(Boolean)
            .join(' ')
        }
        to="/group"
      >
        Dashboard
      </NavLink>
      <NavLink to="/group" onClick={auth.signOut}>
        Login
      </NavLink>
    </div>
  );
};

export default Navigation;
