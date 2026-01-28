import { useEffect } from "react"
import Home from "./pages/home/Home.jsx";
import "./App.css";

function App() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log(window.scrollY)
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
