import Button from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import Note from 'components/molecules/Note/Note';
import React from 'react';
import styles from './Notes.module.scss';

const Notes = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <FormField label="Title" name="title" id="title" />
        <FormField isTextarea label="Content" name="content" id="content" />
        <Button>Add</Button>
      </div>
      <div className={styles.notesWrapper}>
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
};

export default Notes;
