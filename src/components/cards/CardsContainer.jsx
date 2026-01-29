import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./CardsContainer.module.css";

function CardsContainer() {
  const [results, setResults] = useState([]);
  const [searchFor, setSearchFor] = useState("");
  const [category, setCategory] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    console.log("Card clicked:", card.idMeal);
    document.dispatchEvent(new CustomEvent("cardClick", { detail: { card } }));
  };

  const fetchMeals = async () => {
    try {
      let meals = [];
      if (category && searchFor) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchFor)}`,
        );
        if (!response.ok) throw new Error();
        const data = await response.json();
        meals = (data.meals || []).filter((m) => m.strCategory === category);
      } else if (category) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`,
        );
        if (!response.ok) throw new Error();
        const data = await response.json();
        meals = (data.meals || []).map((m) => ({
          ...m,
          strCategory: category,
        }));
      } else {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchFor)}`,
        );
        if (!response.ok) throw new Error();
        const data = await response.json();
        meals = data.meals || [];
      }

      setResults(meals);
    } catch (error) {
      console.log(error);
      setResults([]);
    }
  };

  useEffect(() => {
    const onSearch = (e) => setSearchFor(e.detail.searchInput);
    const onCategory = (e) => setCategory(e.detail.category || "");

    document.addEventListener("search", onSearch);
    document.addEventListener("categoryFilter", onCategory);

    return () => {
      document.removeEventListener("search", onSearch);
      document.removeEventListener("categoryFilter", onCategory);
    };
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [searchFor, category]);

  return (
    <>
      <div className="container">
        {!searchFor && !category ? (
          <>
            <h2 className={styles.mealsH}>Suggestions</h2>
            <div className={styles.grid}>
              {results.map((card) => {
                return (
                  <Card
                    cardObj={card}
                    key={card.idMeal}
                    onClick={handleCardClick}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <>
            <h2 className={styles.mealsH}>
              {category
                ? `Category: "${category}"`
                : `Results for "${searchFor}"`}
            </h2>
            <div
              className={styles.grid}
              style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
            >
              {results.map((card) => {
                return (
                  <Card
                    cardObj={card}
                    key={card.idMeal}
                    onClick={handleCardClick}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CardsContainer;
