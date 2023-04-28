import styles from '../styles/publications.module.css';
import bckStyles from '../styles/background.module.css';

const Publications = () => {
  return (
    <div className={`topContainer ${styles.publications}`}>
        <div className={`${bckStyles.bckGrnd} ${bckStyles.bckGrnd1}`}></div>
        <div className={`${bckStyles.bckGrnd} ${bckStyles.bckGrnd2}`}></div>
      <h1>Bringing you the latest news and insights on various aspects</h1>
      <div className={styles.publicationsContainer}>
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
              Soil erosion assessment in a hilly catchment of North Eastern
              India using USLE, GIS and remote sensing
            </h3>
            <div>
              <span>
                PP Dabral, N Baithuri, A Pandey <br /> Water Resources
                Management 22 (12) , 1783 - 1798
              </span>
              <span>Posted in 2008</span>
            </div>
          </div>
          <div className={styles.publicationItem}>
            <h3>
              Statistical analysis of long term spatial and temporal trends of
              precipitation during 1901–2002 at Madhya Pradesh, India
            </h3>
            <div>
              <span>
                D Duhan, A Pandey <br />
                Atmospheric Research 122, 136 - 149
              </span>
              <span>Posted in 2013</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
