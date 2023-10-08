import React from 'react';
import styles from "./index.module.css";
import { AuctionDataProps } from '../../types';
import Timestamp from '../../components/timestamp';

// assets
import drop1 from "../../assets/drop-1.svg";
import drop2 from "../../assets/drop-2.svg";
import drop3 from "../../assets/drop-3.svg";
import drop4 from "../../assets/drop-4.svg";

const Drop: React.FC = () => {
  const data: AuctionDataProps[] = [
    {id: 1, image: drop1, imageBg: "blue", timeTitle: "Time remaining", imageTimestamp: "Join", imageTime: "06 hrs : 45 min : 22s", mainBg: "blue", mainTime: "UPCOMING", title: "Eyo: Eko For Show", time: "06 hrs : 45 min : 22s"},
    {id: 2, image: drop2, imageBg: "blue", timeTitle: "Time remaining", imageTimestamp: "Join", imageTime: "06 hrs : 45 min : 22s", mainBg: "green", mainTime: "LIVE NOW", title: "Ginger Suburbs", time: "06 hrs : 45 min : 22s"},
    {id: 3, image: drop3, imageBg: "grey", timeTitle: "Auction ended", imageTimestamp: "View", imageTime: "2 hours ago", mainBg: "grey", mainTime: "ENDED", title: "Sink", time: "2 hours ago"},
    {id: 4, image: drop4, imageBg: "grey", timeTitle: "Auction ended", imageTimestamp: "View", imageTime: "5 hours ago", mainBg: "grey", mainTime: "ENDED", title: "Warped '99", time: "5 hours ago"},
  ]

  return (
    <section className={styles.container}>
      <h3>Upcoming drops</h3>
      <p>Turn on notifications so that no drops will miss you</p>

      <article>
        {data.map((item)=>(
          <div key={item.id} className={styles.flex_container}>
            <div className={styles.image_container}>
              <img src={item.image} alt="" />

              <div className={styles.drop_filter}>
                <div>{item.timeTitle}</div>
                <div>
                  <div>{item.imageTime}</div>
                  <Timestamp time={item.imageTimestamp} bg={item.imageBg} />
                </div>
              </div>
            </div>

            <div className={styles.info}>
              <Timestamp time={item.mainTime} bg={item.mainBg} />

              <div>November 21 at 11 am WAT</div>

              <div>{item.title}</div>

              <p>
                Lorem ipsum dolor sit amet consectetur. 
                Amet odio a aenean quis vitae tempus. 
                Sed nunc tempus aliquet lectus ut vulputate.
              </p>

              <div>Creator: <span>Nduks</span></div>

              <div className={styles.link}>{item.imageTimestamp}</div>
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}

export default Drop