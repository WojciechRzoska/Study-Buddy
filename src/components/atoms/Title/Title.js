import React from 'react';
import styles from './Title.module.scss';

export const Title = ({ children, error }) => {
  return <h1 className={`${styles.title} ${error}`}>{children}</h1>;
};
