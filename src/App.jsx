import { Footer } from "./components/Footer.jsx"
import { Navbar } from "./components/Navbar.jsx"
import { Inicio } from "./pages/Inicio.jsx"
import { DetalleProducto } from "./pages/DetalleProducto.jsx"
import { Category } from "./pages/Category.jsx"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { useState , useEffect } from "react"

import Papa from "papaparse"

import './App.css'

function App() {

  const [ productos , setproductos] = useState([])
  const [ categoria, setcategoria ] = useState([])

  useEffect(()=>{
    async function dowloandData(){ 
      const URL_CSV_CATEGORIAS= 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTmmV9LXuB7Z-xyFJEz-_zRVRxaQseY7U0PyZvm7kp0uVj2gbtzLYk_q7LABr4hkDnCTsNxzeXC-fEB/pub?gid=0&single=true&output=csv'
      const respuestaCategoria = await new Promise((res, rej)=>{
        Papa.parse(URL_CSV_CATEGORIAS, {
          download: true,
          header: true,
          complete: (results) => {
            res(results.data)
          },
          error: (err) => {rej(err)
          }
        })
      })
      setcategoria(respuestaCategoria)

  	  const URL_CSV_PRODUCTOS = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTmmV9LXuB7Z-xyFJEz-_zRVRxaQseY7U0PyZvm7kp0uVj2gbtzLYk_q7LABr4hkDnCTsNxzeXC-fEB/pub?gid=1765329098&single=true&output=csv'
      const product = await new Promise((res,rej)=>{
        Papa.parse(URL_CSV_PRODUCTOS, {
          download: true,
          header: true,
          complete: (results) => {
            res(results.data)
          },
          error: (err) => {rej(err)}
        })
      })
      setproductos(product)
    }
    dowloandData()
  },[])

  return (
    <>
      <Router>
        <Navbar categorias={categoria}/>
          <Routes>
            <Route path="/" element={<Inicio productos={productos} categorias={categoria}/>}/>
            <Route path="/categoria/:category" element={<Category key="cat" productos={productos} categorias={categoria}/>}/>
            <Route path="/producto/:id" element={<DetalleProducto productos={productos}/>}/>
          </Routes>
        <Footer categorias={categoria}/>
      </Router>
    </>
  )
}

export default App
