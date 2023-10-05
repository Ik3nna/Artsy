import styles from "./index.module.css";
import { useSelector, useDispatch } from 'react-redux';
import CartButtons from '../cart-buttons';
import { RootState } from '../../store';
import { cartActions } from '../../store/cart-slice';

// icons
import { ImCancelCircle } from 'react-icons/im';

const CartItems = ({ type }: { type: string }) => {
  const itemsList = useSelector((state: RootState)=> state.cart.itemsList);
  const dispatch = useDispatch();

  const handleRemoval = (itemId: number)=> {
    dispatch(cartActions.removeFromCart(itemId))
  }

  if (itemsList.length < 1) {
    window.location.href="/marketplace"
  }

  return (
    <section className={`${styles.container} ${type==="shipping" && styles.shipping}`}>
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
                <ImCancelCircle fontSize={30} className={styles.cancel} color="#888" onClick={()=>handleRemoval(item.id)} />
                <div>${item.price}</div>
              </div>
            </div><hr />
          </article>
        ))}
    </section>
  )
}

export default CartItems