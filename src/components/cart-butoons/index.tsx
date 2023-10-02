import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./index.module.css";
import { cartActions } from "../../store/cart-slice";
import { RootState } from '../../store';

const CartButtons: React.FC = () => {
  const reduxDispatch = useDispatch();
  const quantity = useSelector((state:RootState) => state.cart.quantity);

  const handleIncrement = ()=> {
    reduxDispatch(cartActions.increment());
  }

  const handleDecrement = ()=> {
    reduxDispatch(cartActions.decrement());
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