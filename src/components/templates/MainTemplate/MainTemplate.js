import Navigation from 'components/organisms/Navigation/Navigation';
import React from 'react';
import styles from './MainTemplate.module.scss';

const MainTemplate = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      {children}
    </div>
  );
};

export default MainTemplate;
