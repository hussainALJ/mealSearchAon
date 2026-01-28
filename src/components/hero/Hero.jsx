import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };

    window.addEventListener("scroll", () => {
      if (window.scrollY < 1600) {
        setScrolled(window.scrollY)
      }
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div
        className="container grid"
        style={{ opacity: `${1 - (scrolled / 1600).toFixed(2)}` }}
      >
        <div className={`${styles.img1} ${styles.imgContainer}`}>
          <img
            className={styles.img}
            src="https://www.themealdb.com/images/media/meals/okl9cm1764371087.jpg"
            alt="Torta de fiambre"
          />
        </div>
        <div className={`${styles.img2} ${styles.imgContainer}`}>
          <img
            className={styles.img}
            src="https://www.themealdb.com/images/media/meals/f3ee3y1763309332.jpg"
            alt=""
          />
        </div>
        <div className={`${styles.searchBar} searchBar`}>
          <img
            src="/search-icon.svg"
            alt=""
            style={{ width: "32px", height: "32px" }}
          />
          <input type="text" placeholder="Search meal by name" />
        </div>
        <h1 className={styles.welcomeText}>
          Welcome to the Meal
          <br /> Search Tool
        </h1>
        <p className={styles.welcomeSubText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi fuga
          fugiat harum. Cupiditate doloribus neque adipisci quas voluptatibus
          cumque explicabo.
        </p>
        <div className={`${styles.img3} ${styles.imgContainer}`}>
          <img
            className={styles.img}
            src="https://www.themealdb.com/images/media/meals/ewcikl1614348364.jpg"
            alt=""
          />
        </div>
        <div className={`${styles.img4} ${styles.imgContainer}`}>
          <img
            className={styles.img}
            src="https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg"
            alt=""
          />
        </div>
        <div className={`${styles.img5} ${styles.imgContainer}`}>
          <img
            className={styles.img}
            src="https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
