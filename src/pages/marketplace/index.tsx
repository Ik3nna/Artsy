import React, { useReducer, useState } from 'react';
import styles from "./index.module.css";
import { Data } from '../../utils/data';

// assets
import filterIcon from "../../assets/filter.svg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"

// icons
import { BiSearch } from "react-icons/bi";

// types
import { State, Action, DataProps } from '../../types';

const Marketplace: React.FC = () => {
  const priceRange = [
    { id: 1, price: "All" },
    { id: 2, price: "Below $100.00" },
    { id: 3, price: "$100.00 - $150.00" },
    { id: 4, price: "$150.00 - $200.00" },
    { id: 5, price: "Above $200.00" }
  ];

  const [state, dispatch] = useReducer(reducer, initialState);
  const [showMore, setShowMore] = useState(false);

  const toggleCategory = (category: keyof State) => {
    dispatch({ type: 'TOGGLE_CATEGORY', category });
  };

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
                    <div onClick={() => toggleCategory('category1')}>
                        {state.category1 ? <IoIosArrowDown /> : <IoIosArrowUp />}
                    </div>
                </div>

                {state.category1 &&
                    Data.slice(0, 5).map((item: DataProps)=>(
                        <div key={item.id} className={styles.categories}>
                            <input type='checkbox' />
                            <div>{item.category}</div>
                        </div>
                    ))
                }
            </div>
            
            <div className={styles.price_filter}>
                <div>
                    <div>By price</div>
                    <div onClick={() => toggleCategory('category2')}>
                        {state.category2 ? <IoIosArrowDown /> : <IoIosArrowUp />}
                    </div>
                </div>

                {state.category2 &&
                    priceRange.map((item)=>(
                        <div key={item.id} className={styles.prices}>
                            {item.price}
                        </div>
                    ))
                }
            </div>

            <div className={styles.artist_filter}>
                <div>
                    <div>By artist</div>
                    <div onClick={() => toggleCategory('category3')}>
                        {state.category3 ? <IoIosArrowDown /> : <IoIosArrowUp />}
                    </div>
                </div>

                {state.category3 &&
                    Data.slice(0, 9).map((item: DataProps)=>(
                        <div key={item.id} className={styles.artists}>
                            <input type='checkbox' />
                            <div>{item.artist}</div>
                        </div>
                    ))
                }   
            </div>
        </article>

        <article>
            <div className={styles.viewbox}>
                See 1-6 of {Data.length} results
            </div>

            <div className={styles.products}>
                {
                    Data.map((item)=>(
                        <div key={item.id} className={styles.box_container}>
                            <img src={item.image} alt={item.artist} />
                            <div>{item.artist}</div>
                            <div>{item.price}</div>
                        </div>
                    )).slice(0, showMore ? Data.length : 8)
                }
            </div>

            <div className={styles.btn} onClick={()=>setShowMore(!showMore)}>
                {showMore ? "Show less" : "Show more"}
            </div>
        </article>
    </section>
  )
}

export default Marketplace;


const initialState: State = {
    category1: true,
    category2: true,
    category3: true,
};
    
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'TOGGLE_CATEGORY':
        return {
          ...state,
          [action.category]: !state[action.category],
        };
      default:
        return state;
    }
};
  