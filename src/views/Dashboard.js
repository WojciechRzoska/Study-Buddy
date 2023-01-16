import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import styledWrapper from 'assets/styles/ViewWrapper.module.scss';
import styles from './Dashboard.module.scss';
import StudentList from 'components/organisms/UserList/StudentList';
import { useStudents } from 'hooks/useStudents';
import { Title } from 'components/atoms/Title/Title';
import useModal from 'components/organisms/Modal/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';
import { useGetGroupsQuery } from 'store';

const Dashboard = () => {
  const [currentStudent, setCurrentStudent] = useState(null);
  const { getStudentById } = useStudents();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { data, isLoading } = useGetGroupsQuery();

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };
  if (isLoading) {
    return <div>Loadingg...</div>;
  }
  if (!id && data.groups.length > 0)
    return <Navigate to={`/group/${data.groups[0].id}`} />;

  return (
    <div className={styles.Wrapper}>
      <div className={styles.titleWrapper}>
        <Title>Group {id}</Title>
        <nav>
          {data.groups.map(({ id }) => (
            <Link key={id} to={`/group/${id}`}>
              {id}{' '}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styledWrapper.viewWrapper}>
        <StudentList handleOpenStudentDetails={handleOpenStudentDetails} />

        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <StudentDetails student={currentStudent} />
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
