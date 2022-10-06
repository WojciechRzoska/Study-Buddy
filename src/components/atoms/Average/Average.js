import React from 'react';
import styles from './Average.module.scss';
const Average = (props) => {
  return (
    <div
      className={`${
        props.average > 4
          ? `${styles.wrapper} ${styles.buttonSuccess}`
          : props.average > 3
          ? `${styles.wrapper} ${styles.buttonWarning}`
          : props.average > 1 && `${styles.wrapper} ${styles.buttonError}`
      } ${props.size === 'big' ? `${styles.bigAverage}` : null}`}
    >
      {props.average}
    </div>
  );
};

export default Average;
