import { useEffect, useState } from "react";
import styles from './Tags.module.css';

function Tags() {
    const [tags, setTags] = useState([])
    const [activeTag, setActiveTag] = useState("");

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`,
      );
      if (!response.ok)
        throw new Error("failed to fetch categories:", response);
      const categories = await response.json();
      setTags(categories.categories);
    } catch (error) {
        console.log(error.message)
    }
  };


    useEffect(() => {
        fetchCategories();
    }, [])

    const handleClick = (category) => {
      const next = activeTag === category ? "" : category;
      setActiveTag(next);
      document.dispatchEvent(new CustomEvent('categoryFilter', { detail: { category: next } }));
    };

  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <div
          key={tag.idCategory}
          className={`${styles.tag} ${activeTag === tag.strCategory ? styles.active : ''}`}
          onClick={() => handleClick(tag.strCategory)}
        >
          <p>{tag.strCategory}</p>
        </div>
      ))}
    </div>
  );
}

export default Tags;
