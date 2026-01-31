import { input } from "framer-motion/client";
import { useEffect, useState } from "react";

function SearchBar(style) {
  const [searchInput, setSearchInput] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchResults = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`,
      );
      setIsLoading(false);
      if (!response.ok) throw new Error("failed to find");
      const mealsObj = await response.json();
      mealsObj.meals !== null
        ? setPredictions(mealsObj.meals)
        : setPredictions([
            {
              strMeal: `Couldn't find a meal with the name of "${searchInput}"`,
              idMeal: 0,
            },
          ]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchInput !== "" && isLoading) {
      setPredictions([{ strMeal: "Loading...", idMeal: 0 }]);
      fetchResults();
    }
    return setIsLoading(true);
  }, [searchInput]);

  return (
    <>
      <div className={`searchBar ${style.style}`}>
        <div className="searchInput flex" 
        
        >
          <img
            src="/search-icon.svg"
            alt=""
            style={{ width: "32px", height: "32px" }}
          />
          <input
            style={{width: '100%'}}
            name="search"
            type="text"
            placeholder="Search meal by name"
            value={searchInput}
            enterKeyHint="go"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                input.value = e.key
                const searchEvent = new CustomEvent("search", {
                  bubbles: true,
                  detail: { searchInput },
                });
                document.dispatchEvent(searchEvent);
                window.scrollTo({
                  top: 900,
                  left: 0,
                  behavior: "smooth",
                });
              }
            }}
          />
        </div>
        <div className="predictions">
          {predictions.map((prediction) => {
            return (
              <p
                onClick={() => {
                  setSearchInput(prediction.strMeal)
                }}
                style={{cursor: 'pointer'}}
                key={prediction.idMeal}
              >
                {prediction.strMeal}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
