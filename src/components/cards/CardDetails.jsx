import { style } from "framer-motion/client";
import styles from "./CardsContainer.module.css";

function CardDetails({ card, onClose }) {
  if (!card) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = card[`strIngredient${i}`];
    const measure = card[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        name: ingredient,
        measure: measure || "",
        image: `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`,
      });
      document.body.style.overflow = "hidden";
    }
  }

  return (
    <div className={styles.separator}>
        <div className={styles.cardDetails}>
          <div className={styles.detailsImgContainer}>
            <img
              className={styles.detailsImg}
              src={card.strMealThumb}
              alt={card.strMeal}
            />
          {ingredients.map((ing, idx) => (
            <div key={idx} className={styles.ingredient}>
              <img src={ing.image} alt={ing.name} style={{ width: "50px", height: "50px" }} />
              <p>{ing.measure}</p>
              <p>{ing.name}</p>
            </div>
          ))}
          </div>
          <h2 className={style.title}>{card.strMeal}</h2>
          <div className={`${styles.info} flex`}>
              <p>{card.strArea}</p>
              <p>/</p>
              <p>{card.strCategory}</p>
          </div>
          <hr />
          <div className={styles.instructions}>
              <p>{card.strInstructions}</p>
          </div>
          <button onClick={onClose} className={styles.closeBtn}>
            Close
          </button>
        </div>
    </div>
  );
}

export default CardDetails;
