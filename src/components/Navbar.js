import styles from "../styles/navbar.module.css";
import Logo1 from "../images/Logo1.svg";
import Logo2 from "../images/Logo2.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [viewMenu, setViewMenu] = useState(false);

  return (
    <div className={styles.nav}>
      <div className={`${styles.imgDiv} ${styles.logo1}`}>
        <img src={Logo1} alt="Logo1"></img>
      </div>
      <div className={viewMenu ? styles.mobileMenu : styles.navList}>
        <ul>
          <li onClick={() => setViewMenu(false)}>
            <Link to={"/"}>
              <div>
                <b>Home</b>
              </div>
            </Link>
          </li>
          <li onClick={() => setViewMenu(false)}>
            <Link to={"/events"}>
              <div>
                <b>Events</b>
              </div>
            </Link>
          </li>
          <li onClick={() => setViewMenu(false)}>
            <Link to={"/research"}>
              <div>
                <b>Research Projects</b>
              </div>
            </Link>
          </li>
          <li onClick={() => setViewMenu(false)}>
            <Link to={"/gallery"}>
              <div>
                <b>Gallery</b>
              </div>
            </Link>
          </li>
          <li onClick={() => setViewMenu(false)}>
            <Link to={"/publications"}>
              <div>
                <b>Publications</b>
              </div>
            </Link>
          </li>
          <li onClick={() => setViewMenu(false)}>
            <Link to={"/contact"}>
              <div>
                <b>Contact Us</b>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.imgDiv} ${styles.logo2}`}>
        <img src={Logo2} alt="Logo2"></img>
      </div>

      <div className={styles.hamBurger}>
        <p onClick={() => setViewMenu(!viewMenu)}>
          <i class="fa-solid fa-bars"></i>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
