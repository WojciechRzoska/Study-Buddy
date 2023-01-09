import Navigation from 'components/organisms/Navigation/Navigation';
import NotesWidget from 'components/organisms/NotesWidget/NotesWidget';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import React from 'react';
import NewsSection from '../NewsSection/NewsSection';
import styles from './MainTemplate.module.scss';

const MainTemplate = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
      <NotesWidget />
    </div>
  );
};

export default MainTemplate;
