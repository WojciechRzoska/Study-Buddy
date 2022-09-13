import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './StudentList.module.scss';
import { Title } from 'components/atoms/Title/Title';
import StudentListItem from 'components/molecules/StudentListItem/StudentListItem.js';
import { useStudents } from 'hooks/useStudents';

const StudentList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });

  return (
    <>
      <Title>Students List</Title>
      <ul className={styles.userList}>
        {students.map((userData) => (
          <StudentListItem key={userData.name} userData={userData} />
        ))}
      </ul>
    </>
  );
};

export default StudentList;
