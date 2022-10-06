import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import Average from 'components/atoms/Average/Average';
import styles from './StudentDetails.module.scss';

const StudentDetails = ({ student }) => {
  return (
    <div className={styles.wrapper}>
      <Average size={'big'} average={student.average}></Average>
      <Title>{student.name}</Title>
      <div className={styles.details}>
        <h3 className={styles.label}>Course:</h3>
        <p>Business</p>
        <h3 className={styles.label}>Average grades:</h3>
        <div className={styles.subjectInfo}>
          <p>abc</p>
          <Average average={student.average}></Average>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
