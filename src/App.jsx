import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import ScrollToTop from "./ScrollToTop.jsx"

import NavBar from "./Navbar.jsx"
import News from "./pages/News.jsx"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"

import Projects from "./pages/Projects.jsx"
import MolThesaurus from './pages/projects/MolThesaurus.jsx'
import RustKTD from './pages/projects/RustKTD.jsx'
import Placeholder from './pages/projects/iGEM2026.jsx'

import Contact from "./pages/Contact.jsx"
import Journal from "./pages/Journal.jsx"

function App() {
    const location = useLocation()

    return (
    <div className="relative grid grid-cols-[320px_auto] min-h-screen w-screen overflow-hidden">
      <ScrollToTop />
      <NavBar />
      <div className="col-start-2 overflow-y-scroll bg-white w-full">
        <News />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="projects">
                <Route index element={<Projects />} />
                <Route path="molecular-thesaurus" element={<MolThesaurus />} />
                <Route path="rust-ktd" element={<RustKTD />} />
                <Route path="igem-2026" element={<Placeholder />} />
            </Route>

            <Route path="contact" element={<Contact />} />

            <Route path="journal" >
            <Route index element={<Journal />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </div>
    );
}

export default App