import Note from 'components/molecules/Note/Note';
import React, { useState } from 'react';
import styles from './NotesWidget.module.scss';
import { useSelector } from 'react-redux';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState('false');
  const notes = useSelector((state) => state.notes);

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
        {notes.length ? (
          notes.map(({ id, title, content }) => (
            <Note id={id} key={id} title={title} content={content} />
          ))
        ) : (
          <p>Create your first note</p>
        )}
      </div>
    </div>
  );
};

export default NotesWidget;
