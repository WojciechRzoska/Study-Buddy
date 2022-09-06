import React, { useContext, useReducer } from 'react';
import styles from 'assets/styles/ViewWrapper.module.scss';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvides';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValue: 'CLEAR VALUE',
  consentToggle: 'CONSENT TOGGLE',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.clearValue:
      return initialFormState;
    case actionTypes.consentToggle:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.throwError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      dispatch({ type: actionTypes.clearValue });
    } else {
      dispatch({
        type: actionTypes.throwError,
        errorValue: 'You need to check the consent',
      });
    }
  };

  return (
    <form className={styles.viewWrapper} onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
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
      <FormField
        label="Consent"
        name="consent"
        id="consent"
        type="checkbox"
        onChange={() => dispatch({ type: actionTypes.consentToggle })}
      />
      <Button type="submit" />
      {formValues.error ? <p>{formValues.error}</p> : null}
    </form>
  );
};

export default AddUser;
