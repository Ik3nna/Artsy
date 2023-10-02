import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import styles from "./index.module.css";
import CartItems from '../../../components/cart-items';

// icons
import { ImCancelCircle } from "react-icons/im"
import Button from '../../../components/button';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const totalQuantity = useSelector((state: RootState)=>state.cart.totalQuantity)

  const handleTabClick = (tab: number) =>{
    setSelectedTab(tab);
  }
  
  return (
    <section className={styles.container}>
      <article className={styles.tabs}>
        <div className={`${selectedTab === 0 && styles.active}`} onClick={()=>handleTabClick(0)}>Shopping cart</div>
        <div className={`${selectedTab === 1 && styles.active}`} onClick={()=>handleTabClick(1)}>Shopping details</div>
        <div className={`${selectedTab === 2 && styles.active}`} onClick={()=>handleTabClick(2)}>Payment details</div>
      </article><hr />

      {selectedTab === 0 &&
        <>
          <CartItems />

          <article className={styles.checkout_container}>
            <div>
              <Button linkTo="#" className="btn" onClick={()=>setSelectedTab(1)}>Proceed to checkout</Button>
              <Link to="/marketplace">Continue shopping</Link>
            </div>

            <div className={styles.price_details}>
              <div>Products in cart: <div>{totalQuantity} items</div></div>
              <div>Shipping: <div>$2.50</div></div>
              <div>Total: <div>Total price</div></div>
            </div>
          </article>
        </>
      }

      {/* {selectedTab === 1 && 
        <>
        </>
      } */}
    </section>
  )
}

export default Checkout