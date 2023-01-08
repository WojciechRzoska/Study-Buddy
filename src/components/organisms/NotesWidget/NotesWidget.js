import Note from 'components/molecules/Note/Note';
import React, { useState } from 'react';
import styles from './NotesWidget.module.scss';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState('false');

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);
  return (
    <div
      className={
        isOpen === true
          ? `${styles.wrapper} ${styles['wrapper--open']}`
          : `${styles.wrapper} ${styles['wrapper--close']}`
      }
    >
      <button className={styles.widgetHandler} onClick={handleToggleWidget}>
        notes
      </button>
      <div className={styles.notesWrapper}>
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
};

export default NotesWidget;
