import React from 'react';
import styles from './Input.module.scss';

const Input = React.forwardRef(({ isTextarea, ...props }, ref) => {
  return (
    <>
      {isTextarea ? (
        <textarea
          className={`${styles.input} , ${styles.textarea}`}
          {...props}
          ref={ref}
        />
      ) : (
        <input className={styles.input} {...props} ref={ref} />
      )}
    </>
  );
});

export default Input;
