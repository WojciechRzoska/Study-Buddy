import React from 'react';
import styles from './Form.module.scss';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <form className={styles.wrapper} onSubmit={handleAddUser}>
        <h1>Add new student</h1>
        <FormField
          label="Name"
          name="name"
          id="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          label="Attendance"
          name="attendance"
          id="attendance"
          value={formValues.attendance}
          onChange={handleInputChange}
        />
        <FormField
          label="Average"
          name="average"
          id="average"
          value={formValues.average}
          onChange={handleInputChange}
        />
        <Button type="submit" />
      </form>
    </>
  );
};

export default Form;
