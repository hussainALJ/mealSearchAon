import { useEffect, useState } from "react";
import styles from "./meals.module.css";
import Header from "../../layout/header/Header.jsx";

function Meals() {
  return (
    <section className={styles.meals}>
      <Header />
    </section>
  );
}

export default Meals;
