import { BrowserRouter, Link, Routes, Route } from "react-router"

import NavBar from "./Navbar.jsx"
import News from "./pages/News.jsx"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Apply from "./pages/Apply.jsx"

import Projects from "./pages/Projects.jsx"
import MolecularThesaurus from './pages/projects/MT.jsx'
import RustKTD from './pages/projects/RustKTD.jsx'
import One from './pages/projects/YearOne.jsx'

import Donate from "./pages/Donate.jsx"
import Contact from "./pages/Contact.jsx"
import Journal from "./pages/Journal.jsx"

function App() {
    return (
    <div class="relative grid grid-cols-[320px_auto] min-h-screen w-screen overflow-hidden">
      <NavBar />
      <div class="col-start-2 overflow-y-scroll bg-white">
        <News />
        <BrowserRouter>
            <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="projects">
                <Route index element={<Projects />} />
                <Route path="molecularthesaurus" element={<MolecularThesaurus />} />
                <Route path="rustktd" element={<RustKTD />} />
                <Route path="2026" element={<One />} />
            </Route>

            <Route path="apply" element={<Apply />} />
            <Route path="donate" element={<Donate />} />
            <Route path="contact" element={<Contact />} />

            <Route path="journal" >
                <Route index element={<Journal />} />
            </Route>
            </Routes>
        </BrowserRouter>
      </div>
    </div>
    );
}

export default App