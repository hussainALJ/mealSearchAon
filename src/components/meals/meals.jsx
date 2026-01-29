import styles from "./meals.module.css";
import Header from "../../layout/header/Header.jsx";

function Meals() {
  return (
    <section className={styles.meals}>
      <div className="container">
        <Header />
      </div>
    </section>
  );
}

export default Meals;
