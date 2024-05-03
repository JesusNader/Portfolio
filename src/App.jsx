import { NavBar } from "./components/NavBar"
import { AboutMe } from "./pages/AboutMe"
import { HeroSection } from "./pages/HeroSection"

function App() {

  return (
    <div className="portfolio-container">
      <NavBar />
      <HeroSection />
      <AboutMe />
    </div>
  )
}

export default App
