import React from 'react';
import styles from './Root.module.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import AddUser from './AddUser';

const Root = () => {
  return (
    <Router>
      <MainTemplate>
        <div className={styles.wrapper}>
          <Routes>
            <Route path="/" element={<Navigate to="/group" />} />
            <Route path="/add-user" element={<AddUser />}></Route>
            <Route path="/group" element={<Dashboard />}>
              <Route path=":id" element={<Dashboard />} />
            </Route>
          </Routes>
        </div>
      </MainTemplate>
    </Router>
  );
};

export default Root;
