import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import styles from "../styles/gallery.module.css";
import bckStyles from "../styles/background.module.css";
import { image1, image2, image3, image4 } from "../images/gallery";

const Gallery = () => {
  useEffect(() => {
    // Create a link element and set its attributes
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./gallerySwiperStyles.css";

    // Append the link element to the head of the document
    document.head.appendChild(link);

    // Return a cleanup function to remove the link element when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const imgArray = [image1, image2, image3, image4];

  return (
    <div className={`topContainer ${styles.gallery}`}>
      <div className={`${bckStyles.bckGrnd} ${bckStyles.bckGrnd1}`}></div>
      <div className={`${bckStyles.bckGrnd} ${bckStyles.bckGrnd2}`}></div>
      <h1>Have a look at our recent events</h1>
      <div className={styles.galleryContainer}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            // slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {imgArray.map((img, index) => {
            return (
              <SwiperSlide>
                <img src={img} alt={`img-${index}`} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <h1>Few other events can be displayed below </h1>
      <div className={styles.eventContainer}>
        <div className={styles.eventItem}>
          <div className={styles.imgDiv}>
            <img src={image1} alt=""></img>
          </div>
          <span>Short description about the event</span>
        </div>
        <div className={styles.eventItem}>
          <div className={styles.imgDiv}>
            <img src={image2} alt=""></img>
          </div>
          <span>Short description about the event</span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
