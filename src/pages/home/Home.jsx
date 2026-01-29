import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero.jsx";
import Meals from "../../components/meals/meals.jsx";

function Home() {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const handler = (e) => setSelectedCard(e.detail.card);
    document.addEventListener("cardClick", handler);
    return () => document.removeEventListener("cardClick", handler);
  }, []);

  return (
    <>
      <Hero />
      <Meals />
    </>
  );
}

export default Home;
