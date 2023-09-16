import React from 'react';
import styles from "./index.module.css";

// assets
import filterIcon from "../../assets/filter.svg";

// icons
import { BiSearch } from "react-icons/bi"

const Marketplace: React.FC = () => {
  return (
    <section className={styles.container}>
        <article>
            <div className={styles.search}>
                <input type='text' placeholder="Search" />
                <BiSearch className={styles.search_icon} />
            </div>

            <div className={styles.filter_container}>
                <img src={filterIcon} alt="filter" />
                <div>Filter</div>
            </div>

        </article>

        <article>
            <div className={styles.viewbox}>
                See 1-16 of 15 results
            </div>
        </article>
    </section>
  )
}

export default Marketplace;