import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormField.module.scss';
import Input from 'components/atoms/Input/Input';

const FormField = ({
  value,
  onChange,
  label,
  name,
  id,
  type = 'text',
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <Input
        className={styles.input}
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        data-testid={label}
      />
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
