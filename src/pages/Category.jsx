import { HeaderMain } from "../components/Navbar"
import { CardBlog } from "../components/Cards"
// import { productosData } from '../data/productosData'		

import { useState , useEffect, use } from "react"
import { useParams } from "react-router-dom"


export function Category(){
	// con datos en arrays
	const { category } = useParams()

	// const filtrar = productosData.filter(producto => producto.categoria === category);
	// con datos en json

	const [productos, setproductos] = useState([])

	useEffect(()=>{
		fetch('/data/products.json')
		.then(res => res.json())
		.then(data => {
			setproductos(data.filter(producto=>producto.categoria === category))
		})
		.catch(err => console.error("error cargando productos",err))
	},[category])


  return (
    <main className="mt-15">
      <section><HeaderMain /></section>
      <section className="grid grid-cols-3 gap-10 p-10 ">
				{productos.map(producto=>( 
					<CardBlog key={producto.id} producto={producto} />
				))}
			</section>            
    </main>
  )
}
