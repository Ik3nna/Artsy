import React from 'react';
import styles from "./index.module.css";
import { useSelector, useDispatch } from 'react-redux';
import CartButtons from '../cart-buttons';
import { RootState } from '../../store';

// icons
import { ImCancelCircle } from 'react-icons/im';

const CartItems: React.FC = () => {
  const itemsList = useSelector((state: RootState)=> state.cart.itemsList);
  return (
    <section className={styles.container}>
        {itemsList.map((item)=>(
          <article key={item.id} className={styles.items_container}>
            <div>
              <img src={item.image} alt={item.artist} />

              <div className={styles.details}>
                <div>{item.artist}</div>
                <div>{item.category}</div>
                <div>Size: 200ft</div>
                <CartButtons id={item.id} />
              </div>

              <div>
                <ImCancelCircle fontSize={30} color="#888" />
                <div>{item.price}</div>
              </div>
            </div><hr />
          </article>
        ))}
    </section>
  )
}

export default CartItems