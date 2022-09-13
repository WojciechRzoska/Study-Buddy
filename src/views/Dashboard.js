import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import styledWrapper from 'assets/styles/ViewWrapper.module.scss';
import styles from './Dashboard.module.scss';
import StudentList from 'components/organisms/UserList/StudentList';
import { useStudents } from 'hooks/useStudents';
import { Title } from 'components/atoms/Title/Title';

const Dashboard = () => {
  const { groups } = useStudents();
  const { id } = useParams();

  if (!id && groups.length > 0) return <Navigate to={`/group/${groups[0]}`} />;

  return (
    <div className={styles.Wrapper}>
      <div className={styles.titleWrapper}>
        <Title>Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styledWrapper.viewWrapper}>
        <StudentList />
      </div>
    </div>
  );
};

export default Dashboard;
