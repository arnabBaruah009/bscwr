import styles from "../styles/home.module.css";

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
        <h1>Other general objectives of BSCWR</h1>
      </div>
    </div>
  );
};

export default Home;
