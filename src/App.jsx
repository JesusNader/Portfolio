import { NavBar } from "./components/NavBar"
import { AboutMe } from "./pages/AboutMe"
import { ContactMe } from "./pages/ContactMe"
import { Footer } from "./pages/Footer"
import { HeroSection } from "./pages/HeroSection"
import { Proyects } from "./pages/Proyects"

function App() {

  return (
    <>
      <main className="portfolio-container">
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
