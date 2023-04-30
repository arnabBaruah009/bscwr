import { Link } from "react-router-dom";

import styles from "../styles/home.module.css";
import img7 from "../images/img7.png";

const Home = () => {
  return (
    <div className={`${styles.home} topContainer`}>
      <div className={styles.hero}>
        <div className={styles.leftDiv}>
          <div>
            <h5>
              Bharat Singh Chair for <br />
              water resources,
            </h5>
            <p>IIT Roorkee</p>
          </div>
          <div>
            <h5>Prof. Ashish Pandey</h5>
            <p>
              MoWR Chair (2023-2026) <br /> Professor, WRD M
            </p>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <h1>What is BSCWR?</h1>
          <p>
            Bharat Singh Chair for Water Resources was established by the
            Ministry of Jal Shakti, Department of Water Resources, River
            Development and Ganga Rejuvenation (Erstwhile Ministry of Water
            Resources) , Government of India at IIT Roorkee in 2008.
          </p>
        </div>
      </div>

      <div className={styles.objDiv}>
        <h1>What are our main objectives?</h1>
        <div className={styles.objListDiv}>
          <ol>
            <li>
              To carry out studies on water resources systems with special
              emphasis on assessment of effect of climate change on it and
              adaptation strategies in respect of planning, design and
              management of water resources systems of particularly Indus Basin.
            </li>
            <li>
              An important activity related to the Chair will be to transfer
              technology to various departments of the Ministry of Jal Shakti,
              Department of Water Resources, River Development and Ganga
              Rejuvenation, Government of India
            </li>
          </ol>
        </div>
      </div>

      <div className={`${styles.otherObjDiv} ${styles.objDiv}`}>
        <h1>Other general objectives of BSCWR</h1>
        <div className={`${styles.otherObjListDiv} ${styles.objListDiv}`}>
          <ol>
            <li>
              To take part in the academic programme of the IIT Roorkee as full
              time professor faculty in Water Resources Engineering.
            </li>
            <li>
              To develop R&D programme relevant to the needs of various
              organizations of MOWR/GOI in the related areas.
            </li>
            <li>
              To initiate and develop human resources development (HRD)
              programmes relevant to the needs of various organizations of
              MOWR/GOI and to coordinate courses for their officers.
            </li>
            <li>
              To review available design standards and suggest necessary
              modifications / changes to accommodate the effect of climate
              change in design of water resources systems.
            </li>
          </ol>
        </div>
      </div>

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

export default Home;
