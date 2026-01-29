import { useEffect, useState } from "react";

function SearchBar(style) {
  const [searchInput, setSearchInput] = useState("");
  const [predictions, setPredictions] = useState([]);

  const fetchResults = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`,
      );
      if (!response.ok) throw new Error("failed to find");
      const mealsObj = await response.json();
      setPredictions(mealsObj.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchInput !== "") fetchResults();
    return setPredictions([]);
  }, [searchInput]);

  return (
    <>
      <div className={`searchBar ${style.style}`}>
        <div className="searchInput flex">
          <img
            src="/search-icon.svg"
            alt=""
            style={{ width: "32px", height: "32px" }}
          />
          <input
            name="search"
            type="text"
            placeholder="Search meal by name"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter"){
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
            return <p key={prediction.idMeal}>{prediction.strMeal}</p>;
          })}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
