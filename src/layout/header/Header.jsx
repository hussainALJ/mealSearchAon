import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SearchBar from '../../components/SearchBar.jsx';
import Tags from "../../components/tags/Tags.jsx";

function Header() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.header
      ref={ref} 
      style={{ y, opacity , position: 'relative'}}
    >
      <Tags />
      <SearchBar />
    </motion.header>
  );
}

export default Header;
