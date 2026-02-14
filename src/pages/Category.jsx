import { CardBlog } from "../components/Cards"

import { useState , useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"

export function Category({productos,categorias}){
	const { category } = useParams()
  
  const productSelect= useMemo(()=>{
    const categoriaEncontrada = categorias.find((c)=> c.nombre.toLowerCase() == category.toLowerCase())
    if (!categoriaEncontrada) return []
    return productos.filter((p)=> p.categoria_id == categoriaEncontrada.id)
  },[category,productos,categorias])

  return (
    <main className="mt-15">
      <section className="text-center bg-indigo-600/30 text-2xl py-3">
        <h3 className="uppercase font-extrabold text-indigo-600">{category}</h3>
      </section>
      <section className="grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 py-10 px-2 ">
				{productSelect.map(producto=>( 
					<CardBlog key={producto.id} producto={producto} />
				))}
			</section>            
    </main>
  )
}
