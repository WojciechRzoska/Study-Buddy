import Button from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import Note from 'components/molecules/Note/Note';
import React from 'react';
import styles from './Notes.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from 'store';
import { useForm } from 'react-hook-form';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddNote = ({ title, content }) => {
    dispatch(addNote({ title, content }));
  };
  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={handleSubmit(handleAddNote)}
        className={styles.formWrapper}
      >
        <FormField
          {...register('title', { required: true })}
          label="Title"
          name="title"
          id="title"
        />
        <FormField
          {...register('content', { required: true })}
          isTextarea
          label="Content"
          name="content"
          id="content"
        />
        {errors.title && <span>Title is required</span>}
        {errors.content && <span>Content is required</span>}
        <Button>Add</Button>
      </form>
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

export default Notes;
