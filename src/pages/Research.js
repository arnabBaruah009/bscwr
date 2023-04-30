import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

import styles from "../styles/research.module.css";
import bckStyles from "../styles/background.module.css";

const Research = () => {
  useEffect(() => {
    // Create a link element and set its attributes
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./researchSwiperStyles.css";

    // Append the link element to the head of the document
    document.head.appendChild(link);

    // Return a cleanup function to remove the link element when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className={`topContainer ${styles.research}`}>
      <div className={`${bckStyles.bckGrnd} ${bckStyles.bckGrnd1}`}></div>
      <div className={`${bckStyles.bckGrnd} ${bckStyles.bckGrnd2}`}></div>
      <h1>Pioneering research in various aspects</h1>
      <div className={styles.researchListContainer}>
        <ul className={styles.researchList}>
          <li>
            <div className={styles.listItem}>
              <div className={styles.headerBox}>
                <div className={styles.circle}>
                  <span>1</span>
                </div>
                <p>
                  SENSITIVITY OF HEC RAS-DAM BREAK MODULE TO INPUT VARIABLES :
                </p>
              </div>
              <p>
                Prof. S. K. Mishra and Prof. Ashish Pandey. <br />
                Submitted to WAPCOS India Limited, Gurgaon. November 2013.
              </p>
            </div>
          </li>
          <li>
            <div className={styles.listItem}>
              <div className={styles.headerBox}>
                <div className={styles.circle}>
                  <span>2</span>
                </div>
                <p>
                  ASSESSMENT OF SEDIMENT YIELD FROM THEIR RESERVOIR CATCHMENT :
                </p>
              </div>
              <p>
                Prof. S. K. Mishra and Prof. Ashish Pandey. <br />
                Submitted to THDC India Limited, Rishikesh. February 2018.
              </p>
            </div>
          </li>
          <li>
            <div className={styles.listItem}>
              <div className={styles.headerBox}>
                <div className={styles.circle}>
                  <span>3</span>
                </div>
                <p>
                  EXPERIMENTAL VERIFICATION OF SCS RUNOFF CURVE NUMBERS FOR
                  SELECTED SOILS AND LAND USES  :
                </p>
              </div>
              <p>
                Prof. S. K. Mishra and Prof. Ashish Pandey (IITR) , Dr. R. P .
                Pandey (Scientist, NIH Roorkee) ,  Er. Mohan Lal (Pantnagar).
                <br /> Submitted to  Indian National Committee for Surface Water
                (INCSW) , Ministry of  Water Resources, River Development and
                Ganga Rejuvenation, Government of  India , New  Delhi . October
                2019.
              </p>
            </div>
          </li>
          <li>
            <div className={styles.listItem}>
              <div className={styles.headerBox}>
                <div className={styles.circle}>
                  <span>4</span>
                </div>
                <p>
                  IDENTIFICATION OF VULNERABLE AREAS IN HIMALAYAN WATERSHEDS :
                </p>
              </div>
              <p>
                Prof. S. K. Mishra and Prof. Ashish Pandey. <br />
                Submitted to National Institute of Hydrology Roorkee.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.progressDiv}>
        <h1>Progress of work during the following years</h1>
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.content}>
              <h2>2017-18 & 2018-19</h2>
              <h3>Papers published in Refereed Journals and Conferences</h3>
              <ul>
                <li>
                  Rath, Upanand, S.K. Mishra, NN Rai 2019 ,’Dam safety analysis
                  of Matatila dam from hydrologic and hydraulic considerations,
                  Int. Dam Safety Conf. 2019, 13 1 Feb., Bhubaneswar, Odisha,
                  India.
                </li>
                <li>
                  Nema M.K., Khare D., Adamowski J., Chandniha S.K. 2018 .
                  Spatiotemporal analysis of rainfall trends in Chhattisgarh
                  State, Central India over the last 115 years. Journal of Water
                  and Land Development. No. 36 p. 117–128. DOI: 10.278/jwld 2018
                  0012
                </li>
                <li>
                  Nema M.K., Jain Sharad K., and Khare D. 2018 . “Assessment of
                  ecological status of a river by using the Eco-Flow Metrics”
                  Proc. Int. Conf. HYDRO 2018-International.
                </li>
                <li>
                  Nema M.K., Jain Sharad K., and Khare D. 2018 . “Simulating
                  future landuse of Seonath basin, Central India using MLP NN
                  Markov model”. Under submission
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.content}>
              <h2>2017-18 & 2018-19</h2>
              <h3>Papers published in Refereed Journals and Conferences</h3>
              <ul>
                <li>
                  Rath, Upanand, S.K. Mishra, NN Rai 2019 ,’Dam safety analysis
                  of Matatila dam from hydrologic and hydraulic considerations,
                  Int. Dam Safety Conf. 2019, 13 1 Feb., Bhubaneswar, Odisha,
                  India.
                </li>
                <li>
                  Nema M.K., Khare D., Adamowski J., Chandniha S.K. 2018 .
                  Spatiotemporal analysis of rainfall trends in Chhattisgarh
                  State, Central India over the last 115 years. Journal of Water
                  and Land Development. No. 36 p. 117–128. DOI: 10.278/jwld 2018
                  0012
                </li>
                <li>
                  Nema M.K., Jain Sharad K., and Khare D. 2018 . “Assessment of
                  ecological status of a river by using the Eco-Flow Metrics”
                  Proc. Int. Conf. HYDRO 2018-International.
                </li>
                <li>
                  Nema M.K., Jain Sharad K., and Khare D. 2018 . “Simulating
                  future landuse of Seonath basin, Central India using MLP NN
                  Markov model”. Under submission
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.content}>
              <h2>2017-18 & 2018-19</h2>
              <h3>Papers published in Refereed Journals and Conferences</h3>
              <ul>
                <li>
                  Rath, Upanand, S.K. Mishra, NN Rai 2019 ,’Dam safety analysis
                  of Matatila dam from hydrologic and hydraulic considerations,
                  Int. Dam Safety Conf. 2019, 13 1 Feb., Bhubaneswar, Odisha,
                  India.
                </li>
                <li>
                  Nema M.K., Khare D., Adamowski J., Chandniha S.K. 2018 .
                  Spatiotemporal analysis of rainfall trends in Chhattisgarh
                  State, Central India over the last 115 years. Journal of Water
                  and Land Development. No. 36 p. 117–128. DOI: 10.278/jwld 2018
                  0012
                </li>
                <li>
                  Nema M.K., Jain Sharad K., and Khare D. 2018 . “Assessment of
                  ecological status of a river by using the Eco-Flow Metrics”
                  Proc. Int. Conf. HYDRO 2018-International.
                </li>
                <li>
                  Nema M.K., Jain Sharad K., and Khare D. 2018 . “Simulating
                  future landuse of Seonath basin, Central India using MLP NN
                  Markov model”. Under submission
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Research;
