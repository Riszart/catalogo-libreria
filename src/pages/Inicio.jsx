import { CardCategoria, CardProduct } from "../components/Cards"
import { HeaderMain } from "../components/Navbar"
import { useState, useEffect, useMemo} from "react"

export function Inicio({categorias, productos}){

  const data = useMemo(()=>{
    function obtRandon(lista,cantidad){
    let copia = [...lista]
    // Algoritmo Fisher-Yates (barajado perfecto)
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia.slice(0, cantidad);
    }
    return obtRandon(productos,5)
  },[productos])

  return (
    <main className="mt-15">
      <section>
        <HeaderMain/>
      </section>
      <section>
        <section className="bg-white pb-10">
          <div className="h-20 flex justify-between items-center p-10 capitalize font-bold text-2xl">
            <h3 className="text-[#84A5B8]">categoria</h3>
          </div>
          <div className="lg:flex flex-col lg:flex-row gap-5 lg:justify-center place-items-center grid grid-cols-2 p-4">
            {categorias.map(categoria => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </section>
        <section className="pb-10 p-4">
          <div className="h-20 flex justify-between items-center p-10 capitalize font-bold text-2xl">
            <h3 className="text-[#84A5B8]">lo mas visto</h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mx-5 lg:mx-0">
            {data.map(producto => (
              <CardProduct key={producto.id} producto={producto} />
            ))}
          </div>
        </section>
        <section>
          <div className="h-20 flex justify-between items-center p-10 capitalize font-bold text-2xl">
            <h3 className="text-[#84A5B8]">marcas</h3>
          </div>
        </section>
      </section>
    </main>
  )
}