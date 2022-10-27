import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <a href="/"><span className={`fa-solid fa-list-check`}></span></a>
        </div>
        <ul className={styles.subpages}>
          <li><a href="/">Home</a></li>
          <li><a href="/favorite">Favorite</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav >
  );
};

export default NavBar;