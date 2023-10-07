import React from 'react';
import styles from "./index.module.css";
import { AuctionDataProps } from '../../types';

// assets
import drop1 from "../../assets/drop-1.svg";
import drop2 from "../../assets/drop-2.svg";
import drop3 from "../../assets/drop-3.svg";
import drop4 from "../../assets/drop-4.svg";

const Drop: React.FC = () => {
  const data: AuctionDataProps[] = [
    {id: 1, image: drop1, imageBg: "blue", timeTitle: "Time remaining", imageTimestamp: "join", imageTime: "06 hrs : 45 min : 22s", mainBg: "blue", mainTime: "UPCOMING", title: "Eyo: Eko For Show", time: "06 hrs : 45 min : 22s"},
    {id: 2, image: drop2, imageBg: "blue", timeTitle: "Time remaining", imageTimestamp: "join", imageTime: "06 hrs : 45 min : 22s", mainBg: "green", mainTime: "LIVE NOW", title: "Ginger Suburbs", time: "06 hrs : 45 min : 22s"},
    {id: 3, image: drop3, imageBg: "grey", timeTitle: "Auction ended", imageTimestamp: "view", imageTime: "2 hours ago", mainBg: "grey", mainTime: "ENDED", title: "Sink", time: "2 hours ago"},
    {id: 4, image: drop4, imageBg: "grey", timeTitle: "Auction ended", imageTimestamp: "view", imageTime: "5 hours ago", mainBg: "grey", mainTime: "ENDED", title: "Warped '99", time: "5 hours ago"},
  ]

  return (
    <section className={styles.container}>

    </section>
  )
}

export default Drop