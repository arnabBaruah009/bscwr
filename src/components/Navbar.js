import styles from "../styles/navbar.module.css";
import Logo1 from "../images/Logo1.svg";
import Logo2 from "../images/Logo2.svg";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.imgDiv}>
        <img src={Logo1} alt="Logo1"></img>
        <img src={Logo2} alt="Logo2"></img>
      </div>
      <div className={styles.navList}>
        <ul>
          <li>
            <div>
              <b>Home</b>
            </div>
          </li>
          <li>
            <div>
              <b>Team</b>
            </div>
          </li>
          <li>
            <div>
              <b>Finance</b>
            </div>
          </li>
          <li>
            <div>
              <b>Research Projects</b>
            </div>
          </li>
          <li>
            <div>
              <b>Gallery</b>
            </div>
          </li>
          <li>
            <div>
              <b>Publication</b>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
