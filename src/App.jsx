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
      const URL_CSV_CATEGORIAS= 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRE_aIN7G0zt9pePEdy66RUBaQKBhwgzn9mi5NKFFo32Pv9Fg15fLdDIukXjrQpZk4iyn0LtZ36CSHK/pub?gid=835031930&single=true&output=csv'
      
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

  	  const URL_CSV_PRODUCTOS = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRE_aIN7G0zt9pePEdy66RUBaQKBhwgzn9mi5NKFFo32Pv9Fg15fLdDIukXjrQpZk4iyn0LtZ36CSHK/pub?gid=0&single=true&output=csv'
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
        <div className="grid min-h-svh grid-rows-[auto_1fr_auto] ">
          <Navbar categorias={categoria}/>
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Inicio productos={productos} categorias={categoria}/>}/>
              <Route path="/categoria/:category" element={<Category key="cat" productos={productos} categorias={categoria}/>}/>
              <Route path="/producto/:id" element={<DetalleProducto productos={productos}/>}/>
            </Routes>
          </div>
          <Footer categorias={categoria} className={"h-fit"}/>
        </div>
      </Router>
    </>
  )
}

export default App
