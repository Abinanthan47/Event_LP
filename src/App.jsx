import { Analytics } from "@vercel/analytics/react"
import CountdownTimer from "./components/CountdownTimer"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import ImageCarousel from "./components/NonTech"
import FuzzyOverlayExample from "./components/Prizes"
import TechDay1 from "./components/TechEventsDay1"
import TechDay2 from "./components/TechEventsDay2"
import Workshops from "./components/WorkShop"

function App() {
  return <>
    <Analytics />
    <CountdownTimer />
    <Hero />
    <TechDay1 />
    <TechDay2 />
    <ImageCarousel />
    <FuzzyOverlayExample />
    <Workshops />
    <Gallery />
    <Footer />
  </>
}

export default App
