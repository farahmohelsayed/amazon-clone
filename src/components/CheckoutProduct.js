import React from "react";
import styles from './CheckoutProduct.module.css'
import {useDispatch} from 'react-redux'
import { cartActions } from "../store/cart-slice";

function CheckoutProduct({ id, title, price, image, rating, quantity }) {
    const dispatch = useDispatch()
    const removeItemHandler=()=>{
        dispatch(cartActions.removeItem(id))
    }
  return (
    <div className={styles.product}>
        <img src={image}  className={styles.image}/>
     <div className={styles.productDetails}>
      <h3>{title}</h3>
      <p>
        <small>$</small>
        <strong>{price} x{quantity}</strong>
      </p>
      <div className={styles.rating}>
      {Array(rating).fill().map(_=><p className={styles.rating}>⭐</p>)}
      </div>
      <button onClick={removeItemHandler}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
