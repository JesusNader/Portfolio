import { NavBar } from "./components/NavBar"
import { useThemeContext } from "./context/ThemeContext";
import { HeroSection } from "./pages/HeroSection"

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`portfolio-container${theme ? ' theme-dark' : ''}`}>
      <NavBar />
      <HeroSection />
    </div>
  )
}

export default App
