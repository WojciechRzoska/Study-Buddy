import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import styles from './Note.module.scss';
import { useRemoveNoteMutation } from 'store';

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const [removeNote] = useRemoveNoteMutation();

  const handleRemoveNote = () => {
    removeNote({ id: id });
  };
  return (
    <div className={styles.noteWrapper}>
      <Title>{title}</Title>
      <p>{content}</p>
      <DeleteButton isNoteBtn onClick={handleRemoveNote} />
    </div>
  );
};

export default Note;
