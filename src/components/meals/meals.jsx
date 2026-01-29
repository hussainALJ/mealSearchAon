import { useEffect, useState } from "react";
import styles from "./meals.module.css";
import Header from "../../layout/header/Header.jsx";
import CardsContainer from "../cards/CardsContainer.jsx";
import CardDetails from "../cards/CardDetails.jsx";

function Meals() {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const handler = (e) => setSelectedCard(e.detail.card);
    document.addEventListener("cardClick", handler);
    return () => document.removeEventListener("cardClick", handler);
  }, []);

  return (
    <section className={styles.meals}>
      <div className="container">
        <Header />
        <CardsContainer />
        <CardDetails card={selectedCard} onClose={() => setSelectedCard(null)} />
      </div>
    </section>
  );
}

export default Meals;
