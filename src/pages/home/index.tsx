import React from 'react';
import { SwiperSlide } from "swiper/react";
import Slider from '../../components/slider';
import Carousel from '../../components/carousel';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
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
import loader from "../../assets/Loader.png";
import loader2 from "../../assets/Loader-2.png";
import slide1 from "../../assets/slide-1.svg";
import slide2 from "../../assets/slide-2.svg";
import slide3 from "../../assets/slide-3.svg";
import heroImg from "../../assets/hero-mobile.png";

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

  const carouselImages = [
    {id: 1, image: slide1, alt: "slide-one" },
    {id: 2, image: slide2, alt: "slide-two" },
    {id: 3, image: slide3, alt: "slide-three" },
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

            <Slider className="mySwiper">
                {images.map((image)=>(
                    <SwiperSlide key={image.id} className={`${styles[image.alt]}`}>
                        <img src={image.image} alt={image.alt} />
                    </SwiperSlide>
                ))}
            </Slider>

            <img src={heroImg} alt="hero" className={styles.mobile} />
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

        <section className={styles.upcoming}>
            <article className={styles.content}>
                <h2>See Upcoming Auctions and Exhibitions</h2><hr />

                <div className={styles.imageContainer}>
                    <div className={styles.left}>
                        <h4>01</h4>

                        <div></div>

                        <div>
                            <h5>MONALISA REDIFINED <br /> IN STYLE.</h5>

                            <p>Start on : 08:00 GTS . Monday </p>

                            <p>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT 
                                WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING 
                                THEIR HIGHEST AND LOWEST BIDS.
                            </p>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <Link to="/auctions">See more</Link>

                        <Link to="/drop">Set a reminder</Link>
                    </div>
                </div>

                <img src={loader} alt="loader" />
            </article>
        </section>

        <section className={styles.linkContainer}>
            <hr />
            <article>
                <div>Explore marketplace</div>

                <Link to="/place">
                    <BsArrowRight className={styles.links} />
                </Link>
            </article><hr />

            <article>
                <div>See auctions</div>

                <Link to="/auctions">
                    <BsArrowRight className={styles.links} />
                </Link>
            </article><hr />
        </section>

        <section className={styles.creators}>
            <article>
                <h2>TOP CREATORS OF <br />THE WEEK</h2>

                <div>
                    <img src={loader2} alt="loader" />

                    <div>
                        <div>Editorials</div>

                        <div>Fashion</div>

                        <div>Lifestyle</div>

                        <div>Blueprint</div>
                    </div>
                </div>
            </article>

            <article>
                <p>
                    “Everything always looked better in black and white. 
                    Everything always  as if it were the first time; there’s 
                    always more people in a black and white photograph. 
                    It just makes it seem that there were more people at a gig, more 
                    people at a football match, than with colour photography. 
                    Everything looks more exciting.”– Jack Lowden
                </p>

                <div className={styles.circa}>CIRCA</div>

                <div className={styles.nmb}>1985</div>

                <Carousel className="carousel">
                    {carouselImages.map((image)=>(
                        <SwiperSlide key={image.id}>
                            <img src={image.image} alt={image.alt} />
                        </SwiperSlide>
                    ))}
                </Carousel>
            </article>
        </section>
    </main>
  )
}

export default Home