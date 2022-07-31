import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import { auth } from "../firebase";
function Header() {
    const cartSelector = useSelector(state=>state.cart)
    const user = useSelector(state=>state.user.user)
    console.log(cartSelector.items)
    const logoutHandler=()=>{
      if(user){
        auth.signOut()
      }
    }
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <StorefrontIcon fontSize="large" className={styles.shopIcon} />
        <h2 className={styles.title}>e-Shop</h2>
      </div>

      <div className={styles.searchBar}>
        <input type="text" className={styles.searchArea} />
        <SearchIcon fontSize="large" className={styles.searchIcon} />
      </div>

      <div className={styles.navItems}>
        <Link to={!user && '/login'} className={styles.links}>
          <div onClick={logoutHandler} className={styles.item}>
            <span>Hello {user? user.email: "Guest"}</span>
            <span className={styles.innerItem}>{user? "Sign out": "Sign in"}</span>
          </div>
        </Link>
        <Link to='/' className={styles.links}>
          <div className={styles.item}>
            <span>Your</span>
            <span className={styles.innerItem}>Shop</span>
          </div>
        </Link>
        <Link to='/checkout' className={styles.links}>
          <div className={styles.cart}>
            <ShoppingBasketIcon
              fontSize="large"
              className={styles.basketIcon}
            />
            <span className={styles.cartNum}>{cartSelector.totalQuantity}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
