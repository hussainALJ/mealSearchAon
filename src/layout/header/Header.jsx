import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Tags from "../../components/tags/Tags.jsx";

function Header() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.header
      ref={ref} 
      style={{ y, opacity , position: 'unset'}}
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
