import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import styles from './ErrorMessage.module.scss';
import PropTypes from 'prop-types';

const defaultError =
  'Something went wrong. Please try again, or contant our support';

const ErrorMessage = ({ message = defaultError }) => {
  return (
    <div className={styles.wrapper}>
      <Title error={styles.errorTitle}>Oops!</Title>
      <p>{message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};
export default ErrorMessage;
