import React, { useReducer, useState, useEffect, useRef } from 'react';
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

    const [data, setData] = useState(Data);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState("");
    const [openSearch, setOpenSearch] = useState(false);
    const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
    const [allCategoriesSelected, setAllCategoriesSelected] = useState(true);
    const [selectedPrice, setSelectedPrice] = useState("All");
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [showMore, setShowMore] = useState(false);

    const toggleCategory = (category: keyof State) => {
        dispatch({ type: 'TOGGLE_CATEGORY', category });
    };

    const handleSearch = (input: string)=> {
        const searched = data.filter((item) =>
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

    const handleCategoryToggle = (category: string) => {
        if (checkedCategories.includes(category)) {
            setCheckedCategories(checkedCategories.filter((item)=> item !== category))
        } else {
            setCheckedCategories([...checkedCategories, category]);
            setShowMore(true);
            setOpenSearch(true);
        }
    }

    const handlePriceClick = (price: string) => {
        setSelectedPrice(price);

        if (price === "All") {
            setData(Data)
            setOpenSearch(false);
            setAllCategoriesSelected(false);
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

    const calculateVisibleItemCount = () => {
        return data.filter((item) => {
          const categoryMatches = checkedCategories.length === 0 || checkedCategories.includes(item.category);
          const priceMatches = selectedPrice === "All" || 
            (selectedPrice === "Below $100.00" && parseFloat(item.price.replace("$", "")) < 100) ||
            (selectedPrice === "$100.00 - $150.00" && parseFloat(item.price.replace("$", "")) >= 100 && parseFloat(item.price.replace("$", "")) <= 150) ||
            (selectedPrice === "$150.00 - $200.00" && parseFloat(item.price.replace("$", "")) >= 150 && parseFloat(item.price.replace("$", "")) <= 200) ||
            (selectedPrice === "Above $200.00" && parseFloat(item.price.replace("$", "")) > 200);
          return categoryMatches && priceMatches;
        }).length;
    };

    useEffect(() => {
        const filteredData = Data.filter((item) => {
          const categoryMatches = checkedCategories.length === 0 || checkedCategories.includes(item.category);
          const priceMatches = selectedPrice === "All" || 
            (selectedPrice === "Below $100.00" && parseFloat(item.price.replace("$", "")) < 100) ||
            (selectedPrice === "$100.00 - $150.00" && parseFloat(item.price.replace("$", "")) >= 100 && parseFloat(item.price.replace("$", "")) <= 150) ||
            (selectedPrice === "$150.00 - $200.00" && parseFloat(item.price.replace("$", "")) >= 150 && parseFloat(item.price.replace("$", "")) <= 200) ||
            (selectedPrice === "Above $200.00" && parseFloat(item.price.replace("$", "")) > 200);
          const inputMatches = inputValue.trim() === '' || 
            item.artist.toLowerCase().includes(inputValue.toLowerCase());
      
          return categoryMatches && priceMatches && inputMatches;
        });
      
        setData(filteredData);
        setOpenSearch(true);
        setShowMore(true);
    }, [inputValue, selectedPrice, checkedCategories]);

    useEffect(() => {
        if (inputValue.trim() === '' ) {
            setShowMore(false)
            setOpenSearch(false);
        }
    }, [inputValue]);

    useEffect(() => {
        setAllCategoriesSelected(checkedCategories.length === 0);
        
        if (checkedCategories.length === 0 && selectedPrice === "All") {
            setAllCategoriesSelected(false);
            setOpenSearch(false);
            setShowMore(false)
        }
    }, [checkedCategories, selectedPrice, allCategoriesSelected]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowDropdown(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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

            <div className={`${styles.category_filter} ${showDropdown && styles.active_category_filter}`} ref={dropdownRef}>
                <div>
                    <div>By category</div>
                    {!showDropdown &&
                        <div onClick={() => toggleCategory('category1')}>
                            {state.category1 ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        </div>
                    }
                </div>

                {state.category1 &&
                    Data.slice(0, 5).map((item: DataProps)=>(
                        <div key={item.id} className={styles.categories}>
                            <input type='checkbox' checked={checkedCategories.includes(item.category)} onChange={()=>handleCategoryToggle(item.category)} />
                            <div>{item.category}</div>
                        </div>
                    ))
                }
            </div>
            
            <div className={`${styles.price_filter} ${showDropdown && styles.active_price_filter}`} ref={dropdownRef}>
                <div>
                    <div>By price</div>
                    {!showDropdown &&
                        <div onClick={() => toggleCategory('category2')}>
                            {state.category2 ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        </div>
                    }
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
                <span onClick={()=>setShowDropdown(!showDropdown)}>
                    Filters
                </span>
                See {calculateVisibleItemCount() === 0 ? "0" : "1"}-{showMore ? calculateVisibleItemCount() : 8} of {calculateVisibleItemCount()} results
            </div>

            <div className={styles.products}>
                {
                    data.filter((item)=>checkedCategories.length === 0 || checkedCategories.includes(item.category)).map((item)=>(
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
  