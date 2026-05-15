import Navbar from "./components/Navbar"
import Timer from "./components/Timer"
import About from "./components/About"
import Footer from "./components/Footer"
import doodleLeft from "./assets/Zwit rwit line.svg"
import doodleRight from "./assets/Zwit rwit line 2.svg"

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg text-maintext">
      <img src={doodleLeft} alt="" aria-hidden="true" className="pointer-events-none absolute right-0 top-12 w-auto max-w-none" />
      <img src={doodleRight} alt="" aria-hidden="true" className="pointer-events-none absolute left-0 top-2 w-auto max-w-none" />

      <Navbar />
      <Timer />
      <About />
      <Footer />
    </div>
  )
}

export default App