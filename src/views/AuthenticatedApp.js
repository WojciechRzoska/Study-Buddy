import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './AuthenticatedApp.module.scss';
import Dashboard from './Dashboard';
import Notes from './Notes';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<Navigate to="/group" />} />
          <Route path="/group" element={<Dashboard />}>
            <Route path=":id" element={<Dashboard />} />
          </Route>
          <Route path="/notes" element={<Notes />}></Route>
        </Routes>
      </div>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
