import React, { useReducer, useState, useEffect } from 'react';
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
    const [inputValue, setInputValue] = useState("");
    const [showMore, setShowMore] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState("All");
    const [data, setData] = useState(Data);

    const toggleCategory = (category: keyof State) => {
        dispatch({ type: 'TOGGLE_CATEGORY', category });
    };

    const handleSearch = (input: string)=> {
        const searched = data.filter((item) =>
            // item.category.toLowerCase().includes(input.toLowerCase()) ||
            item.artist.toLowerCase().includes(input.toLowerCase())
        );
        setData(searched);
        setOpenSearch(true);
        setShowMore(true);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        setInputValue(query);
        handleSearch(query);
    }

    const handlePriceClick = (price: string) => {
        setSelectedPrice(price);

        if (price === "All") {
            setData(Data)
            setOpenSearch(false)
            setShowMore(false);
        } else {
            const filteredData = Data.filter((item)=>{
                const itemPrice = parseFloat(item.price.replace("$",""));
                if (price === "Below $100.00") {
                    return itemPrice < 100
                } else if (price === "$100.00 - $150.00") {
                    return itemPrice >= 100 && itemPrice <= 150
                } else if (price === "$150.00 - $200.00") {
                    return itemPrice >= 150 && itemPrice <= 200
                } else {
                    return itemPrice > 200;
                }
            });
            setData(filteredData);
            setOpenSearch(true);
            setShowMore(true);
        }
    }

    useEffect(() => {
        if (inputValue.trim() === '') {
          setData(Data);
          setOpenSearch(false);
          setShowMore(false);
        }
    }, [inputValue]);

  return (
    <section className={styles.container}>
        <article>
            <div className={styles.search}>
                <input type='text' 
                    placeholder="Search" 
                    value={inputValue} 
                    onChange={handleInputChange}  
                />
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
                        <div key={item.id} className={`${styles.prices} ${ selectedPrice === item.price && styles.selected}`} onClick={()=>handlePriceClick(item.price)}>
                            {item.price}
                        </div>
                    ))
                }
            </div>
        </article>

        <article>
            <div className={styles.viewbox}>
                See 1-{showMore ? data.length : 8} of {data.length} results
            </div>

            <div className={styles.products}>
                {
                    data.map((item)=>(
                        <div key={item.id} className={styles.box_container}>
                            <img src={item.image} alt={item.artist} />
                            <div>{item.artist}</div>
                            <div>{item.price}</div>
                        </div>
                    )).slice(0, showMore ? data.length : 8)
                }
            </div>

            {!openSearch &&
                <div className={styles.btn} onClick={()=>setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Show more"}
                </div>
            }
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
  