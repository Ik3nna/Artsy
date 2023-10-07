import React from 'react';
import styles from "./index.module.css";
import Slider from '../../components/slider';
import { SwiperSlide } from 'swiper/react';

// assets
import auctions1 from "../../assets/auctions-1.svg";
import auctions2 from "../../assets/auctions-2.svg";
import auctions3 from "../../assets/auctions-3.svg";
import ob from "../../assets/ob.svg";
import fa from "../../assets/fa.svg";
import Button from '../../components/button';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
const Auctions: React.FC = () => {
  const [showLove1, setShowLove1] = React.useState(false);
  const [showLove2, setShowLove2] = React.useState(false);

  const images = [
    { id: 1, image: auctions1, alt: "one" },
    { id: 2, image: auctions2, alt: "two" },
    { id: 3, image: auctions3, alt: "three" },
    { id: 4, image: auctions2, alt: "four" },
    { id: 5, image: auctions1, alt: "five" },
    { id: 6, image: auctions3, alt: "six" },
  ]

  return (
    <section className={styles.container}>
      <p>Here's an overview of products actively on auction, explore!</p>

      <Slider className="slider">
        {images.map((image)=>(
          <SwiperSlide key={image.id} className={styles.img_container}>
            <img src={image.image} alt={image.alt} />
            <div className={styles.info}>6hr : 40mins : 15s</div>
          </SwiperSlide>
        ))}
      </Slider>
      
      <article>
        <h6>Top bids from popular creators</h6>

        <div className={styles.flex}>
          <div className={styles.ob}>
            <div>
              <div onClick={()=>setShowLove1(!showLove1)} className={styles.heart}>
                {showLove1 ? 
                  <AiFillHeart color="red" size={35} /> :
                  <AiOutlineHeart size={35} />
                }
              </div>
              <img src={ob} alt="ob" />
              <div>Out of the box</div>
           </div>

           <div>
              <div>Creator: <span>Dan Murray</span></div>
              <div>Date: <span>12/08/2022</span></div>
              <div>Highest bid: <span>0.57ETH</span></div>
           </div>

           <div className={styles.flex}>
              <div>
                <div>Current bid</div>
                <div>0.987 ETH</div>
              </div>

              <Button linkTo="#">Place bid</Button>
           </div>
          </div>
          
          <div className={styles.fa}>
            <div>
              <div onClick={()=>setShowLove2(!showLove2)} className={styles.heart}>
                {showLove2 ? 
                  <AiFillHeart color="red" size={35} /> :
                  <AiOutlineHeart size={35} />
                }
              </div>
              <img src={fa} alt="fa" />
              <div>Falling apart</div>
           </div>

           <div>
              <div>Creator: <span>Jacob Banks</span></div>
              <div>Date: <span>12/08/2022</span></div>
              <div>Highest bid: <span>0.34ETH</span></div>
           </div>

           <div className={styles.flex}>
              <div>
                <div>Current bid</div>
                <div>0.99 ETH</div>
              </div>

              <Button linkTo="#">Place bid</Button>
           </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Auctions;