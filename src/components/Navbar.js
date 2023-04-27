import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.imgDiv}></div>
      <div className={styles.navList}>
        <ul>
            <li>Home</li>
            <li>Team</li>
            <li>Finance</li>
            <li>Research Projects</li>
            <li>Gallery</li>
            <li>Publication</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
