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
      <NavLink
        className={({ isActive }) =>
          [[styles.links], isActive ? [styles.active] : null]
            .filter(Boolean)
            .join(' ')
        }
        to="/notes"
      >
        Notes
      </NavLink>
      <NavLink to="/group" className={styles.links} onClick={auth.signOut}>
        Logout
      </NavLink>
    </div>
  );
};

export default Navigation;
