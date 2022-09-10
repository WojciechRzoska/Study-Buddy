import Input from 'components/atoms/Input/Input';
import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.statusInfo}>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </div>
      <Input />
    </div>
  );
};

export default SearchBar;
