import { NavBar } from "./components/NavBar"
import { AboutMe } from "./pages/AboutMe"
import { ContactMe } from "./pages/ContactMe"
import { Footer } from "./pages/Footer"
import { useThemeContext } from "./context/ThemeContext";
import { HeroSection } from "./pages/HeroSection"
import { Proyects } from "./pages/Proyects"
import { useEffect } from "react";

function App() {
  const { theme } = useThemeContext();

  useEffect(() => {
    const footer = document.querySelector("footer")
    theme ? document.body.classList.add("body-dark") : document.body.classList.remove("body-dark");
    theme ? footer.classList.add("portfolio-footer-dark") : footer.classList.remove("portfolio-footer-dark");
  }, [theme]);

  return (
    <>
      <main className={`portfolio-container${theme ? ' theme-dark' : ''}`}>
        <NavBar />
        <HeroSection />
        <AboutMe />
        <Proyects />
        <ContactMe />
      </main>
      <Footer />
    </>
  )
}

export default App
