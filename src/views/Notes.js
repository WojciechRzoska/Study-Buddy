import Button from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import Note from 'components/molecules/Note/Note';
import React from 'react';
import styles from './Notes.module.scss';
import { useForm } from 'react-hook-form';
import { useGetNotesQuery } from 'store';
import { useAddNoteMutation } from 'store';

const Notes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data, isLoading } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();

  const handleAddNote = ({ title, content }) => {
    addNote({ title, content });
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
      {isLoading ? (
        <h2>Loading...</h2>
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

export default Notes;
