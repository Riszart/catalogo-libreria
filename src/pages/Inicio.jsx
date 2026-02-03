import { CardCategoria, CardProduct } from "../components/Cards"
import { HeaderMain } from "../components/Navbar"
import { useState, useEffect} from "react"

export function Inicio(){

  const [categorias, setCategorias] = useState([])

  useEffect(()=>{
    fetch('/data/category.json')
    .then(res => res.json())
    .then(data => {
      setCategorias(data)
    })
    .catch(err => console.error("error cargando categorias",err))
  })

  const [productos, setproductos] = useState([])

  useEffect(()=>{
    fetch('/data/products.json')
    .then(res => res.json())
    .then(data => {
      setproductos(data)
    })
    .catch(err => console.error("error cargando productos",err))
  })

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
          <div className="flex gap-5 justify-center">
            {categorias.map(categoria => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </section>
        <section className="pb-10">
          <div className="h-20 flex justify-between items-center p-10 capitalize font-bold text-2xl">
            <h3 className="text-[#84A5B8]">lo mas visto</h3>
          </div>
          <div className="flex justify-center gap-5">
            {productos.map(producto => (
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