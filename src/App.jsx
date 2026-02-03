import { Footer } from "./components/Footer.jsx"
import { Navbar } from "./components/Navbar.jsx"
import { Inicio } from "./pages/Inicio.jsx"
import { Category } from "./pages/Category.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/categoria/:category" element={<Category key="cat"/>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
