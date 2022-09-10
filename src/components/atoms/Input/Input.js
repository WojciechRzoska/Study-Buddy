import React from 'react';
import styles from './Input.module.scss';

const Input = ({ name, id, type, value, onChange, label }) => {
  return (
    <input
      className={styles.input}
      name={name}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      data-testid={label}
    />
  );
};

export default Input;
