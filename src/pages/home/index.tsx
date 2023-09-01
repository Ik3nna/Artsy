import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import 'swiper/css/free-mode';
import "swiper/css";
import styles from "./index.module.css";

// images 
import image1 from "../../assets/Rectangle 230.svg";
import image2 from "../../assets/Rectangle 231.svg";
import image3 from "../../assets/Rectangle 232.svg";
import image4 from "../../assets/Rectangle 233.svg";
import image5 from "../../assets/Rectangle 234.svg";
import rectangle299 from "../../assets/Rectangle 299.svg";
import rectangle2991 from "../../assets/Rectangle 299 (1).svg";
import rectangle2992 from "../../assets/Rectangle 299 (2).svg";
import ellipse18 from "../../assets/Ellipse 18.png";
import ellispe17 from "../../assets/Ellipse 17.png";
import ellipse16 from "../../assets/Ellipse 16.png";
import ellipse15 from "../../assets/Ellipse 15.png";
import ellipse14 from "../../assets/Ellipse 14.png";

const Home: React.FC = () => {
  const images = [
    { id: 1, image: image1, alt: "one" },
    { id: 2, image: image2, alt: "two" },
    { id: 3, image: image3, alt: "three" },
    { id: 4, image: image4, alt: "four" },
    { id: 5, image: image5, alt: "five" },
    { id: 6, image: image2, alt: "six" },
  ]

  const roundIcons = [
    { id: 1, image: ellipse18, alt: "one" },
    { id: 2, image: ellispe17, alt: "two" },
    { id: 3, image: ellipse16, alt: "three" },
    { id: 4, image: ellipse15, alt: "four" },
    { id: 5, image: ellipse14, alt: "five" },
  ]

  return (
    <main className={styles.container}>
        <section className={styles.hero}>
            <h1>
                Photography is poetry & beautiful untold stories
            </h1>

            <p>
                Flip through more than 10,000 vintage shots, old photograghs, 
                historic images and captures seamlessly in one place. 
                Register to get top access.
            </p>

            <Swiper slidesPerView={"auto"} freeMode={true} spaceBetween={10} modules={[FreeMode]} className={styles.mySwiper}>
                {images.map((image)=>(
                    <SwiperSlide key={image.id} className={`${styles[image.alt]}`}>
                        <img src={image.image} alt={image.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

        <section className={styles.products}>
            <h2>Featured products</h2><hr />

            <section>
                <article className={styles.imgLink}>
                    <img src={rectangle299} alt="products" />

                    <div className={styles.overlay}>
                        <div className={styles.sh}>
                            <p>View product</p>

                            <Link to="/marketplace" className={styles.place}>
                                <BsArrowRight size="30px" />
                            </Link>
                        </div>
                    </div>
                </article>

                <article>
                    <h3>The boolean egyptian</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor 
                        rhoncus dolor pur
                    </p>

                    <div className={styles.subContainer}>
                        <div className={styles.imgContainer}>
                            {roundIcons.map((item)=>(
                                <img key={item.id} src={item.image} alt={item.alt} />
                            ))}
                        </div>

                        <p>64 major creators</p>

                        <Link to="/marketplace" className={styles.place}>
                            <BsArrowRight size="30px" />
                        </Link>
                    </div>
                </article>
            </section> <hr />

            <section>
                <article>
                    <h3>The boolean egyptian</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor 
                        rhoncus dolor pur
                    </p>

                    <div className={styles.subContainer}>
                        <div className={styles.imgContainer}>
                            {roundIcons.map((item)=>(
                                <img key={item.id} src={item.image} alt={item.alt} />
                            ))}
                        </div>

                        <p>64 major creators</p>

                        <Link to="/marketplace" className={styles.place}>
                            <BsArrowRight size="30px" />
                        </Link>
                    </div>
                </article>

                <article className={styles.imgLink}>
                    <img src={rectangle2991} alt="products" />

                    <div className={styles.overlay}>
                        <div className={styles.sh}>
                            <p>View product</p>

                            <Link to="/marketplace" className={styles.place}>
                                <BsArrowRight size="30px" />
                            </Link>
                        </div>
                    </div>
                </article>
            </section> <hr />

            <section>
                <article className={styles.imgLink}>
                    <img src={rectangle2992} alt="products" />

                    <div className={styles.overlay}>
                        <div className={styles.sh}>
                            <p>View product</p>

                            <Link to="/marketplace" className={styles.place}>
                                <BsArrowRight size="30px" />
                            </Link>
                        </div>
                    </div>
                </article>

                <article>
                    <h3>The boolean egyptian</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor 
                        rhoncus dolor pur
                    </p>

                    <div className={styles.subContainer}>
                        <div className={styles.imgContainer}>
                            {roundIcons.map((item)=>(
                                <img key={item.id} src={item.image} alt={item.alt} />
                            ))}
                        </div>

                        <p>64 major creators</p>

                        <Link to="/marketplace" className={styles.place}>
                            <BsArrowRight size="30px" />
                        </Link>
                    </div>
                </article>
            </section>
        </section>

        <section>
            
        </section>
    </main>
  )
}

export default Home