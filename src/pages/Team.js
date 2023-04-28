import { Link } from "react-router-dom";
import img7 from "../images/img7.png";
import styles from "../styles/team.module.css";

const Team = () => {
  return (
    <div className="topContainer">
      <div className={styles.chairPersonInfo}>
        <div className={`${styles.bckGrnd} ${styles.bckGrnd1}`}></div>
        <div className={styles.imgContainer}>
          <img src={img7} alt="pic"></img>
          <p>
            <b>Prof. Ashish Pandey</b>
          </p>
        </div>
        <div className={styles.details}>
          <h1>Current chair of BSCWR</h1>
          <p>
            Prof. Ashish Pandey did his B. Tech in Agricultural Engineering and
            M.Tech in Soil and Water Engineering from JNKVV, Jabalpur, Madhya
            Pradesh, India. He received Ph.D. degree in Soil and Water
            Conservation Engineering from Indian Institute of Technology
            Kharagpur. He is currently working as a Professor at the Department
            of WRD&M, IIT Roorkee, since December 2019. His research interests
            include Irrigation Water Management, Soil and Water Conservation
            Engineering, Hydrological Modeling of Watershed, etc. He guided 10
            Ph.D. and 78 M.Tech. He has also co-authored a textbook on
            “Introductory Soil and Water Conservation Engineering” and has
            edited three books of “Water Science and Technology Library” Book
            Series published by Springer. He is a Fellow member of (1) .
            Institution of Engineers (India) ; (2) . Indian Association of
            Hydrologists (IAH) and (3) . Indian Water Resources Society (IWRS)
          </p>
        </div>
      </div>

      <div className={styles.publications}>
        <div className={styles.heading}>
          <h1>Publications of Ashish Pandey</h1>
          <Link to={"/publications"}>
            <span>
              View more <i class="fa-solid fa-arrow-right-long"></i>
            </span>
          </Link>
        </div>
        <h2>
          Professor and Head, Department of Water Resources Development and
          Management
        </h2>
        <div className={styles.publicationDiv}>
          <div className={styles.publicationItem}>
            <h3>
              Identification of critical erosion prone areas in the small
              agricultural watershed using USLE, GIS and remote sensing
            </h3>
            <div>
              <span>
                A Pandey, VM Chowdary, BC Mal <br />
                Water resources management 21(4) , 729-7-6
              </span>
              <span>Posted in 2007</span>
            </div>
          </div>
          <div className={styles.publicationItem}>
            <h3>
              Identification of critical erosion prone areas in the small
              agricultural watershed using USLE, GIS and remote sensing
            </h3>
            <div>
              <span>
                A Pandey, VM Chowdary, BC Mal <br />
                Water resources management 21(4) , 729-7-6
              </span>
              <span>Posted in 2001</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.chairProf}>
        <div className={`${styles.bckGrnd} ${styles.bckGrnd2}`}></div>
        <h1>Chair Professors</h1>
        <div className={styles.container}>
          <div className={styles.item}>
            <p>July 26, 2013 - July 2012</p>
            <p>Dr. NK Goel</p>
            <p>Professor, Dept. of Hydrology, IIT Roorkee.</p>
          </div>
          <div className={styles.item}>
            <p>2017-2019</p>
            <p>The position remained unoccupied</p>
          </div>
          <div className={styles.item}>
            <p>July 30, 2019 - July 20222</p>
            <p>Dr. S. K. Mishra</p>
            <p>Current chair of BSCWR</p>
          </div>
          <div className={styles.item}>
            <p>Jan 18, 2023</p>
            <p>To till date</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
