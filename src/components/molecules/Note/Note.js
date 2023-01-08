import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import styles from './Note.module.scss';

const Note = () => {
  return (
    <div className={styles.noteWrapper}>
      <Title>Title</Title>
      <p>
        Exercitation anim irure nostrud duis aliqua. Nulla ullamco nostrud ea
        eiusmod amet minim ex in. Exercitation consectetur sit ullamco pariatur
        in reprehenderit commodo nulla sunt qui. Elit eu proident fugiat Lorem
        laborum ex ea elit tempor aliquip officia eu ipsum voluptate. Nulla
        reprehenderit consequat quis laborum dolor in aute qui nisi minim
        occaecat ex pariatur aute.
      </p>
      <DeleteButton isNoteBtn />
    </div>
  );
};

export default Note;
