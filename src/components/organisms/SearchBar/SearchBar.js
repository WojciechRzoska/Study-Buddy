import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import { useStudents } from 'hooks/useStudents';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    onInputValueChange: getMatchingStudents,
    items: matchingStudents,
    itemToString(matchingStudents) {
      return matchingStudents ? matchingStudents.name : '';
    },
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.statusInfo}>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </div>
      <div className={styles.searchWrapper} {...getComboboxProps()}>
        <input
          className={styles.input}
          {...getInputProps()}
          name="Search"
          id="Search"
          placeholder="Search"
        />
        <ul
          className={
            isOpen && matchingStudents.length > 0
              ? `${styles.searchResults}`
              : null
          }
          {...getMenuProps()}
          aria-label="results"
        >
          {isOpen &&
            matchingStudents.map((item, index) => (
              <li
                className={`${styles.searchResultsItem} ${
                  highlightedIndex === index && styles.highlighted
                }`}
                key={item.id}
                {...getItemProps({ item, index })}
              >
                {item.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
