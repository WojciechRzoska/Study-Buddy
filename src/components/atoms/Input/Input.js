import React from 'react';
import styles from './Input.module.scss';

const Input = React.forwardRef(
  ({ name, id, type, value, onChange, label }, ref) => {
    return (
      <input
        className={styles.input}
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        data-testid={label}
        ref={ref}
      />
    );
  }
);

export default Input;
