import { useEffect, useState } from "react";
import Tags from "../../components/tags/Tags.jsx";

function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`searchBar`}>
        <img
          src="/search-icon.svg"
          alt=""
          style={{ width: "32px", height: "32px" }}
        />
        <input type="text" placeholder="Search meal by name" />
      </div>
      <Tags />
    </motion.header>
  );
}

export default Header;
