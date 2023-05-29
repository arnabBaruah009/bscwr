import styles from "../styles/navbar.module.css";
import Logo1 from "../images/Logo1.svg";
import Logo2 from "../images/Logo2.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [viewMenu, setViewMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.nav}>
      <div className={`${styles.imgDiv} ${styles.logo1}`}>
        <img src={Logo1} alt="Logo1"></img>
      </div>
      <div className={viewMenu ? styles.mobileMenu : styles.navList}>
        <ul>
          <li onClick={() => setViewMenu(false)}>
            <Link to={"/"} onClick={() => handleTabClick("home")}>
              <div className={activeTab === "home" ? styles.active : ""}>
                <b>Home</b>
              </div>
            </Link>
          </li>
          <li onClick={() => setViewMenu(false)}>
            <Link to={"/events"} onClick={() => handleTabClick("events")}>
              <div className={activeTab === "events" ? styles.active : ""}>
                <b>Events</b>
              </div>
            </Link>
          </li>
          <li onClick={() => setViewMenu(false)}>
            <Link to={"/research"} onClick={() => handleTabClick("research")}>
              <div className={activeTab === "research" ? styles.active : ""}>
                <b>Research Projects</b>
              </div>
            </Link>
          </li>
          <li onClick={() => setViewMenu(false)}>
            <Link to={"/gallery"} onClick={() => handleTabClick("gallery")}>
              <div className={activeTab === "gallery" ? styles.active : ""}>
                <b>Gallery</b>
              </div>
            </Link>
          </li>
          <li onClick={() => setViewMenu(false)}>
            <Link
              to={"/publications"}
              onClick={() => handleTabClick("publications")}
            >
              <div
                className={activeTab === "publications" ? styles.active : ""}
              >
                <b>Publications</b>
              </div>
            </Link>
          </li>
          <li onClick={() => setViewMenu(false)}>
            <Link to={"/contact"} onClick={() => handleTabClick("contact")}>
              <div className={activeTab === "contact" ? styles.active : ""}>
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
