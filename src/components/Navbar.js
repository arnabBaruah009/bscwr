import styles from "../styles/navbar.module.css";
import Logo1 from "../images/Logo1.svg";
import Logo2 from "../images/Logo2.svg";
import { Link } from "react-router-dom";

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
            <Link to={"/"}>
              <div>
                <b>Home</b>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/team"}>
              <div>
                <b>Team</b>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <div>
                <b>Finance</b>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/research"}>
              <div>
                <b>Research Projects</b>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/gallery"}>
              <div>
                <b>Gallery</b>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/publications"}>
              <div>
                <b>Publications</b>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
