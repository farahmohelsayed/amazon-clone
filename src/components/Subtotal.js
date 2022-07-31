import React from "react";
import {useSelector} from 'react-redux'
import styles from './Subtotal.module.css'

function Subtotal() {
    const cart = useSelector(state=>state.cart)
  return (
    <div className={styles.subtotal}>
    <p>Subtotal ({cart.totalQuantity} items): <strong>${cart.totalPrice}</strong> </p>
      <small className={styles.gift}>
        <input type='checkbox'/> This order contains a gift
      </small>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
