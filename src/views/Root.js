import UserList from 'components/organisms/UserList/UserList';
import styles from './Root.module.scss';

function Root() {
  return (
    <div className={styles.wrapper}>
      <UserList />
    </div>
  );
}

export default Root;
