import React from 'react';
import styles from "./index.module.css";
import { Data, DataProps } from '../../utils/data';

// assets
import filterIcon from "../../assets/filter.svg";
import { IoIosArrowUp } from "react-icons/io"

// icons
import { BiSearch } from "react-icons/bi"

const Marketplace: React.FC = () => {
  const priceRange = [
    { id: 1, price: "All" },
    { id: 2, price: "Below $100.00" },
    { id: 3, price: "$100.00 - $150.00" },
    { id: 4, price: "$150.00 - $200.00" },
    { id: 5, price: "Above $200.00" }
  ]

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

            <div className={styles.category_filter}>
                <div>
                    <div>By category</div>
                    <IoIosArrowUp />
                </div>

                {
                    Data.slice(0, 5).map((item: DataProps)=>(
                        <div key={item.id}>
                            <input type='checkbox' />
                            <div>{item.category}</div>
                        </div>
                    ))
                }
            </div>
            
            <div className={styles.price_filter}>
                <div>
                    <div>By price</div>
                    <IoIosArrowUp />
                </div>

                {
                    priceRange.map((item)=>(
                        <div key={item.id}>
                            {item.price}
                        </div>
                    ))
                }
            </div>

            <div className={styles.artist_filter}>
                <div>
                    <div>By artist</div>
                    <IoIosArrowUp />
                </div>

                {
                    Data.slice(0, 9).map((item: DataProps)=>(
                        <div key={item.id}>
                            <input type='checkbox' />
                            <div>{item.artist}</div>
                        </div>
                    ))
                }
            </div>
        </article>

        <article>
            <div className={styles.viewbox}>
                See 1-9 of {Data.length} results
            </div>
        </article>
    </section>
  )
}

export default Marketplace;