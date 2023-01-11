import Note from 'components/molecules/Note/Note';
import React, { useState } from 'react';
import styles from './NotesWidget.module.scss';
import { useGetNotesQuery } from 'store';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState('false');
  const { data, isLoading } = useGetNotesQuery();

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
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div className={styles.notesWrapper}>
          {data.notes.length ? (
            data.notes.map(({ id, title, content }) => (
              <Note id={id} key={id} title={title} content={content} />
            ))
          ) : (
            <p>Create your first note</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NotesWidget;
