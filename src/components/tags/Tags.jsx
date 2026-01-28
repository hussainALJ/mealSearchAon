import { useEffect, useState } from "react";

function Tags() {
    const [tags, setTags] = useState([])


  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`,
      );
      const categories = await response.json();
      if (!response.ok)
        throw new Error("failed to fetch categories:", response);
      setTags(categories.categories);
    } catch (error) {
        console.log(error.message)
    }
  };


    useEffect(() => {
        fetchCategories();
    }, [])


  return (
    <>
      <div>
        {tags.map((tag) => (
          <div
            key={tag.idCategory}
            onClick={(e) => {
              const element = e.target.closest("div");
              if (element.className.includes("active")) {
                element.className = "";
              } else {
                element.className = "active";
              }
            }}
          >
            <p>{tag.strCategory}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tags;
