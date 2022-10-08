import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do <span>soon</span></h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out!</p>
      <section className={styles.columns}>
        <Column title="Books" icon="fa-solid fa-book" />
        <Column title="Movies" icon="fa-solid fa-film" />
        <Column title="Games" icon="fa-solid fa-gamepad" />
      </section>
    </div>
  );
};

export default List;