import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <button
      {...props}
      className={
        props.isbig ? `${styles.button} ${styles.bigButton}` : styles.button
      }
    ></button>
  );
};

export default Button;
