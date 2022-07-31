import React from "react";
import styles from './Product.module.css'
import {useDispatch} from 'react-redux'
import { cartActions } from "../store/cart-slice";

function Product({ id, title, price, rating, image }) {
    const dispatch = useDispatch()
    const addProductHandler=()=>{
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image,
            rating
        }))
    }
  return (
    <div className={styles.product}>
    <div className={styles.productInfo}>
      <p>{title}</p>
      <p className={styles.price}>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className={styles.productRating}>   
      {Array(rating).fill().map(_=><p>⭐</p>)}
      </div>
      </div>
      <img  src={image}/>
      <button onClick={addProductHandler}>Add to basket</button>
    </div>
  );
}

export default Product;
