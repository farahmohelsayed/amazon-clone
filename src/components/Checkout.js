import React from "react";
import styles from "./Checkout.module.css";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const cart = useSelector((state) => state.cart.items);
  return (
    <div className={styles.checkout}>
    <div>
      <img
        alt="Ads"
        className={styles.checkoutAd}
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
      />
      {cart.length === 0 ? (
        <div>
          <h2 className={styles.checkoutTitle}> Your Shopping basket is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className={styles.checkoutTitle}>Your shopping basket</h2>
          {cart.map(item=>{return(
            <CheckoutProduct quantity={item.quantity} key={item.id} id={item.id} title={item.title} rating={item.rating} image={item.image} price={item.price} />
          )})}
         
        </div>
      )}
      </div>
 <Subtotal/>
    </div>
  );
}

export default Checkout;
