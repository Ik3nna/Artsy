import { useSelector, useDispatch } from 'react-redux';
import styles from "./index.module.css";
import { cartActions } from "../../store/cart-slice";
import { RootState } from '../../store';

const CartButtons = ({ id }: {id: number}) => {
  const reduxDispatch = useDispatch();
  
  const selectItemQuantity = (itemId: number) => (state: RootState) => {
    const item = state.cart.itemsList.find((item) => item.id === itemId);
    return item ? item.quantity : 0; 
  };

  const quantity = useSelector(selectItemQuantity(id));

  const handleIncrement = ()=> {
    reduxDispatch(cartActions.increment(id));
  }

  const handleDecrement = ()=> {
    reduxDispatch(cartActions.decrement(id));
  }
  return (
    <div className={styles.subContainer}>
        <div onClick={handleDecrement}>-</div>
        <div>{quantity}</div> 
        <div onClick={handleIncrement}>+</div>
    </div>
  )
}

export default CartButtons;