import React from 'react';
import styles from './Root.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import UsersProvides from 'providers/UsersProvides';

const Root = () => {
  return (
    <Router>
      <MainTemplate>
        <UsersProvides>
          <div className={styles.wrapper}>
            <Routes>
              <Route path="/add-user" element={<AddUser />}></Route>
              <Route path="/" element={<Dashboard />}></Route>
            </Routes>
          </div>
        </UsersProvides>
      </MainTemplate>
    </Router>
  );
};

export default Root;
