import React from 'react';
import styles from 'assets/styles/ViewWrapper.module.scss';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { UserShape } from 'types';

const AddUser = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <form className={styles.viewWrapper} onSubmit={handleAddUser}>
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

AddUser.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  formValues: PropTypes.shape(UserShape),
  handleInputChange: PropTypes.func.isRequired,
};

export default AddUser;
