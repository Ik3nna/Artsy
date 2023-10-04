import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import styles from "./index.module.css";
import CartItems from '../../../components/cart-items';

// icons
import Button from '../../../components/button';
import { Link } from 'react-router-dom';
import Input from '../../../components/input';

const Checkout: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const totalQuantity = useSelector((state: RootState)=>state.cart.totalQuantity);
  const totalPrice = useSelector((state: RootState)=>state.cart.totalPrice);

  const handleTabClick = (tab: number) =>{
    setSelectedTab(tab);
  }

  return (
    <section className={styles.container}>
      <article className={styles.tabs}>
        <div className={`${selectedTab === 0 && styles.active}`} onClick={()=>handleTabClick(0)}>Shopping cart</div>
        <div className={`${selectedTab === 1 && styles.active}`} onClick={()=>handleTabClick(1)}>Shipping details</div>
        <div className={`${selectedTab === 2 && styles.active}`} onClick={()=>handleTabClick(2)}>Payment details</div>
      </article><hr />

      {selectedTab === 0 &&
        <section className={styles.checkout}>
          <CartItems type='' />

          <article className={styles.checkout_container}>
            <div>
              <Button linkTo="#" className="btn" onClick={()=>setSelectedTab(1)}>Proceed to checkout</Button>
              <Link to="/marketplace">Continue shopping</Link>
            </div>

            <div className={styles.price_details}>
              <div>Products in cart: <div>{totalQuantity} items</div></div>
              <div>Shipping: <div>$2.50</div></div>
              <div>Total: <div>${totalPrice + 2.5}</div></div>
            </div>
          </article>
        </section>
      }

      {selectedTab === 1 && 
        <section className={styles.shipping}>
          <article className={styles.shipping_container}>
            <div className={styles.form}>
              <Input 
                label="Your email" 
                type="text"
                placeholder="Please enter your email address"
              />

              <Input 
                type='checkbox'
                checkboxMessage='Get updates about new drops & exclusive offers'
              />

              <Input 
                label='Your name'
                type='text'
                placeholder='Please enter your name'
              />

              <Input 
                label="Choose a wallet" 
                select={true}
                selectOptions={
                  <>
                    <option value="Coinbase">Coinbase</option>
                    <option value="Ledger">Ledger</option>
                    <option value="Etherum">Etherum</option>
                    <option value="Coinomi">Coinomi</option>
                  </>
                }
              />

              <Input 
                label="City" 
                select={true}
                selectOptions={
                  <>
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Ibadan">Ibadan</option>
                  </>
                }
              />

              <div className={styles.form_flex}>
                <Input 
                  label="Country" 
                  select={true}
                  selectOptions={
                    <>
                      <option value="Nigeria">Nigeria</option>
                    </>
                  }
                  style={{ width: "280px" }}
                />

                <Input 
                  label="Postal code" 
                  type="text"
                  placeholder="001001"
                  style={{ width: "280px" }}
                />
              </div>

              <Input 
                label="Phone number" 
                type="text"
                placeholder="0812 3456 785"
              />

              <Button linkTo="#" className="btn" onClick={()=>setSelectedTab(2)}>Proceed to payment</Button>
            </div>

            <article className={styles.shipping}>
              <CartItems type="shipping" />

              <div className={styles.price_details}>
                <div>Products in cart: <div>{totalQuantity} items</div></div>
                <div>Shipping: <div>$2.50</div></div>
                <div>Total: <div>${totalPrice  + 2.5}</div></div>
              </div>
            </article>
          </article>
        </section>
      }

      {selectedTab === 2 &&
        <section className={styles.payment}>
          <article className={styles.payment_container}>
            
          </article>
        </section>
      }
    </section>
  )
}

export default Checkout