import React from 'react';
import styles from './Button.module.scss';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const Button = (props) => {
  return (
    <button className={styles.button} {...props}>
      <DeleteIcon />
    </button>
  );
};

export default Button;
