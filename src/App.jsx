import { NavBar } from "./components/NavBar"
import { AboutMe } from "./pages/AboutMe"
import { HeroSection } from "./pages/HeroSection"
import { Proyects } from "./pages/Proyects"

function App() {

  return (
    <div className="portfolio-container">
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Proyects />
    </div>
  )
}

export default App
