import React, { useState, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Data } from '../../../utils/data';
import styles from "./index.module.css";
import Button from '../../../components/button';
import { State, Action } from "../../../types";
import Slider from '../../../components/slider';
import { SwiperSlide } from "swiper/react";
import CartButtons from '../../../components/cart-buttons';

// icons
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';
import { RootState } from '../../../store';

// assets
import image1 from "../../../assets/Rectangle 230.svg";
import image2 from "../../../assets/Rectangle 231.svg";
import image3 from "../../../assets/Rectangle 232.svg";
import image4 from "../../../assets/Rectangle 233.svg";
import image5 from "../../../assets/Rectangle 234.svg";

const MarketplaceId: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showLove, setShowLove] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const reduxDispatch = useDispatch();

  const selectItemQuantity = (itemId: number) => (state: RootState) => {
    const item = state.cart.itemsList.find((item) => item.id === itemId);
    return item ? item.quantity : 0; 
  };

  const itemId = id ? parseInt(id, 10) : undefined;

  const quantity = itemId ? useSelector(selectItemQuantity(itemId)) : 0;

  const handleAddToCart = ()=>{
    if (id !== undefined) {
      const findItem = Data.find((item)=>item.id == parseInt(id, 10));

      if (quantity > 0 && findItem) {
        const item = {
          id: findItem.id,
          category: findItem.category,
          artist: findItem.artist,
          price: findItem.price,
          image: findItem.image,
          quantity: quantity
        }
        reduxDispatch(cartActions.addToCart(item))
      }
    }
  }

  const toggleCategory = (category: keyof State) => {
    dispatch({ type: 'TOGGLE_CATEGORY', category });
  };

  const images = [
    { id: 1, image: image1, alt: "one" },
    { id: 2, image: image2, alt: "two" },
    { id: 3, image: image3, alt: "three" },
    { id: 4, image: image4, alt: "four" },
    { id: 5, image: image5, alt: "five" },
    { id: 6, image: image2, alt: "six" },
  ]

  if (id !== undefined) {
    const findItem = Data.find((item)=>item.id == parseInt(id, 10));
 
    return (
      <section className={styles.container}>
        <article>
          <div onClick={()=>navigate(-1)} className={styles.back}>
            <BsArrowLeft fontSize={25} />
          </div>

          <div className={styles.breadcrumbs}>
            Home/Marketplace/{findItem?.category}/<span>{findItem?.artist}</span>
          </div>
        </article>

        <article className={styles.subContainer}>
          <img src={findItem?.image} />

          <section className={styles.subContainer_desc}>
            <div>
              {findItem?.artist}
            </div>

            <div>
              <p>Creator: <span>Nduks</span></p>

              <p>Made in Nigeria</p>

              <p>Total views: 1.7k views</p>

              <CartButtons id={parseInt(id, 10)} />

              <div>
                <Button linkTo={quantity > 0 ? `/marketplace/checkout?id=${parseInt(id, 10)}` : "#"} onClick={()=>handleAddToCart()}>
                  Add to cart
                </Button>

                <div onClick={()=>setShowLove(!showLove)} className={styles.heart}>
                  {showLove ? 
                    <AiFillHeart color="red" size={35} /> :
                    <AiOutlineHeart size={35} />
                  }
                </div>
              </div>
            </div>

            <div className={styles.desc}>
              <div>
                <div>Description</div>
                {!showDropdown &&
                  <div onClick={() => toggleCategory('category1')}>
                    {state.category1 ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </div>
                }                    
              </div>
                  
              {state.category1 &&
                <div>{findItem?.info.desc}</div>
              }
            </div>

            <div className={styles.listings}>
              <div>
                <div>Listings</div>
                {!showDropdown &&
                  <div onClick={() => toggleCategory('category2')}>
                    {state.category2 ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </div>
                }
              </div>

              {state.category2 &&
                <div>{findItem?.info.listings}</div>
              }
            </div>

            <div className={styles.status}>
              <div>
                <div>Status</div>
                {!showDropdown &&
                  <div onClick={() => toggleCategory('category3')}>
                    {state.category3 ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </div>
                }
              </div>

              {state.category3 &&
                  <div>{findItem?.info.status}</div>
              }
            </div>
          </section>
        </article>

        <div className={styles.viewbox}>
          Explore more from this section
        </div>
        
        <Slider className="slider">
          {images.map((image)=>(
            <SwiperSlide key={image.id} className={styles.img_container}>
              <img src={image.image} alt={image.alt} />
            </SwiperSlide>
          ))}
        </Slider>

        <div className={styles.btn} onClick={()=>window.location.href="/marketplace"}>
          Explore all
        </div>
      </section>
    )
  }
}

export default MarketplaceId;

const initialState: State = {
  category1: false,
  category2: false,
  category3: false,
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