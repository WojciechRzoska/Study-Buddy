import React from 'react';
import styles from './DeleteButton.module.scss';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const DeleteButton = (isNoteBtn, ...props) => {
  return (
    <button
      className={
        isNoteBtn
          ? `${styles.button} ${styles.noteDeleteBtn}`
          : `${styles.button}`
      }
      {...props}
    >
      <DeleteIcon />
    </button>
  );
};

export default DeleteButton;
