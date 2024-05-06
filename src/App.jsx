import { NavBar } from "./components/NavBar"
import { AboutMe } from "./pages/AboutMe"
import { ContactMe } from "./pages/ContactMe"
import { Footer } from "./pages/Footer"
import { useThemeContext } from "./context/ThemeContext";
import { HeroSection } from "./pages/HeroSection"
import { Proyects } from "./pages/Proyects"

function App() {
  const { theme } = useThemeContext();

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
