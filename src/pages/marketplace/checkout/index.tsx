import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import styles from "./index.module.css";
import CartItems from '../../../components/cart-items';
import Button from '../../../components/button';
import { Link } from 'react-router-dom';
import Input from '../../../components/input';

// images 
import metamask from "../../../assets/MetaMask - jpeg.svg";
import coinbase from "../../../assets/Coinbase - png.svg";
import walletConnect from "../../../assets/WalletConnect - jpeg.svg";
import phantom from "../../../assets/Phantom - jpeg.svg";
import delivery from "../../../assets/Woman get online delivery.svg";
import celebration from "../../../assets/noto_party-popper.svg";
import watermark from "../../../assets/delivery-logo.svg";

// icons
import { BiSolidLock } from "react-icons/bi";

const Checkout: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const totalQuantity = useSelector((state: RootState)=>state.cart.totalQuantity);
  const totalPrice = useSelector((state: RootState)=>state.cart.totalPrice);

  const handleTabClick = (tab: number) =>{
    setSelectedTab(tab);
  }

  return (
    <section className={styles.container}>
      {selectedTab !== 3 &&
        <>
        <article className={styles.tabs}>
          <div className={`${selectedTab === 0 && styles.active}`} onClick={()=>handleTabClick(0)}>Shopping cart</div>
          <div className={`${selectedTab === 1 && styles.active}`} onClick={()=>handleTabClick(1)}>Shipping details</div>
          <div className={`${selectedTab === 2 && styles.active}`} onClick={()=>handleTabClick(2)}>Payment details</div>
        </article><hr />
        </>
      }

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
            <div className={styles.payment_method}>
              <h6>Payment method</h6>

              <div className={styles.wallet}>
                <div className={styles.circle}></div>

                <p>Select your wallet</p>

                <div className={styles.imgContainer}>
                  <img src={metamask} alt="metamask" />
                  <img src={coinbase} alt="coinbase" />
                  <img src={walletConnect} alt="wallet connect" />
                  <img src={phantom} alt="phantom" />
                </div>
              </div>

              <p>Connect with one of our available wallet providers or add and connect a new wallet. </p>

              <div className={styles.form}>
                <Input 
                  label='Wallet type'
                  type='text'
                  placeholder='Please insert your wallet type'
                />

                <Input
                  label='Key'
                  type='text'
                  placeholder='Please enter your key'
                  icon={metamask}
                />

                <div className={styles.form_flex}>
                  <Input
                    label='Expiry date'
                    placeholder='MM/YY'
                    type='date'
                    style={{ width: "280px" }}
                  />

                  <Input
                    label='CVV'
                    placeholder='...'
                    type='text'
                    style={{ width: "280px" }}
                  />
                </div>

                <Input 
                  type='checkbox'
                  checkboxMessage='Save my wallet details & information for future transactions'
                />
              </div>

              <Button linkTo="#" className="btn" onClick={()=>setSelectedTab(3)}>Confirm</Button>
            </div>


            <div className={styles.payment_deets}>
              <div>
                <BiSolidLock />
                <div>Secure server</div>
              </div>

              <h6>Payment summary</h6><hr />

              <div>Metamask wallet: 002345KJi90pzzz3</div>

              <div>Actively linked to Yaba, Lagos Nigeria.</div><hr />

              <div>Expected arrival date: Between 22nd September and 26th September 20222</div>

              <div className={styles.price_details}>
                <div>Products in cart: <div>{totalQuantity} items</div></div>
                <div>Shipping: <div>$2.50</div></div>
                <div>Total: <div>${totalPrice  + 2.5}</div></div>
              </div>
            </div>
          </article>
        </section>
      }

      {selectedTab === 3 &&
        <section className={styles.delivery}>
          <img className={styles.watermark} src={watermark} alt="watermark" />
          <img src={delivery} alt="delivery" />

          <article>
            <div>Thank you for your purchase.</div>

            <div>
              <div>You are amazing. Cheers to being Artsy!!</div> 
              <img src={celebration} alt="celebration" />
            </div>
          </article>
        </section>
      }
    </section>
  )
}

export default Checkout;