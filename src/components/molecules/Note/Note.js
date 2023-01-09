import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import styles from './Note.module.scss';
import { useDispatch } from 'react-redux';
import { removeNote } from 'store';

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const dispatch = useDispatch();

  const handleRemoveNote = () => {
    dispatch(removeNote({ id: id }));
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
