import React from "react";
import Header from "./Header";
import styles from "./Home.module.css";
import Product from "./Product";
function Home() {
  return (
    <div>
      <img
        className={styles.homeImage}
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      <div className={styles.homeRow}>
        <Product
          id={1}
          title="Pintola All Natural Peanut Butter (Crunchy) (2.5 kg) (Unsweetened, Non-GMO, Gluten Free, Vegan)"
          price={883.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg"
        />
        <Product
          id={2}
          title="Awestuffs LED Lights for Home Decoration (20 LED Photo Clip 3 Metre String (Warm White))"
          price={140.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41EsI0Fsf1L.jpg"
        />
      </div>
      <div className={styles.homeRow}>
        <Product
          id={3}
          title="Pintola All Natural Peanut Butter (Crunchy) (2.5 kg) (Unsweetened, Non-GMO, Gluten Free, Vegan)"
          price={883.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg"
        />
        <Product
          id={4}
          title="Learning React: Functional Web Development with React and Redux Paperback – 1"
          price={950.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51imLrht6lL._SX389_BO1,204,203,200_.jpg"
        />
        <Product
          id={5}
          title="Awestuffs LED Lights for Home Decoration (20 LED Photo Clip 3 Metre String (Warm White))"
          price={140.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41EsI0Fsf1L.jpg"
        />
      </div>
      <div className={styles.homeRow}>
        <Product
          id={6}
          title="Natural Life Fda Approved Disinfectant Surface Sanitizer, Citrus 500 Ml (Pack Of 3)"
          price={710.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61jj-MeJbvL._SL1200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
