import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"

import Projects from "./pages/Projects.jsx"
import MolecularThesaurus from './pages/projects/MT.jsx'
import RustKTD from './pages/projects/RustKTD.jsx'
import One from './pages/projects/YearOne.jsx'

import Apply from "./pages/Apply.jsx"
import Donate from "./pages/Donate.jsx"
import Contact from "./pages/Contact.jsx"
import Journal from "./pages/Journal.jsx"

createRoot(document.getElementById('root')).render(
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
  </BrowserRouter>,
)
