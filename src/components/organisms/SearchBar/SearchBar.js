import Input from 'components/atoms/Input/Input';
import React, { useState, useEffect } from 'react';
import styles from './SearchBar.module.scss';
import { useStudents } from 'hooks/useStudents';
import debounce from 'lodash.debounce';

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState('');
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (e) => {
    const { students } = await findStudents(searchPhrase);
    setMatchingStudents(students);
  }, 500);

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
  }, [searchPhrase, getMatchingStudents]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.statusInfo}>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </div>
      <div className={styles.searchWrapper}>
        <Input
          onChange={(e) => setSearchPhrase(e.target.value)}
          value={searchPhrase}
          name="Search"
          id="Search"
        />
        {searchPhrase && matchingStudents.length ? (
          <div className={styles.searchResults}>
            {matchingStudents.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
