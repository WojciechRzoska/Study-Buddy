import React from 'react';
import styles from './DeleteButton.module.scss';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const DeleteButton = (props) => {
  return (
    <button className={styles.button} {...props}>
      <DeleteIcon />
    </button>
  );
};

export default DeleteButton;
