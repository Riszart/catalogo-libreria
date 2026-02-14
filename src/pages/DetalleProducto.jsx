import { useParams, useNavigate } from "react-router-dom"
import { useMemo } from "react"
import { Btn } from "../components/Btn"

export function DetalleProducto({productos}){
  const { id } = useParams()
  
  const producto = useMemo(()=>{
    return productos.find((p)=>String(p.id) === String(id))
  },[id,productos])

  if(!producto){
    return (
      <main className="mt-20 p-5 flex flex-col gap-5 mb-10">
        <section>
          <strong className="uppercase text-indigo-600 font-extrabold"></strong>
          <h3 className="font-bold text-2xl text-center"></h3>
        </section>
        <section className="w-full aspect-square  p-10 bg-white rounded-md overflow-hidden border border-indigo-600/20"></section>
        <p className="font-extrabold text-4xl"></p>
        <section className="text-center "></section>
        <section>
          <div className="flex rounded-sm bg-indigo-600/20 text-indigo-600 items-center py-2 px-1">
            <p className=" capitalize font-bold ">detalles de producto </p>
            <span className="ml-2 flex-1 border-b-2 "></span>
          </div>
          <div className="p-4">
          </div>
        </section>
        <section>
          <div className="flex rounded-sm bg-indigo-600/20 text-indigo-600 items-center py-2 px-1">
            <p className=" capitalize font-bold ">descripcion del producto</p>
            <span className="ml-2 flex-1 border-b-2 "></span>
          </div>
          <div className="p-4">
          </div>
        </section>
      </main>
    )
  }

  const tagsProductos = producto.atributos.split(",")

  return (
    <main className="mt-20 p-5 flex flex-col gap-5 mb-10 lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:mx-100">
      <section className="lg:col-start-3 lg:col-span-2">
        <strong className="uppercase text-indigo-600 font-extrabold">{`${producto.marca}`}</strong>
        <h3 className="font-bold text-2xl text-center capitalize">{`${producto.nombre}`}</h3>
      </section>
      <section className="w-full aspect-square  p-10 bg-white rounded-md overflow-hidden border border-indigo-600/20 lg:row-start-1 lg:row-span-3 lg:col-start-1 lg:col-span-2">
        <img src={`${producto.url_img}`} alt={`${producto.nombre}`} />
      </section>
      <p className="font-extrabold text-4xl">S/. <span>{`${producto.precio}`}</span></p>
      <section className="text-center lg:col-start-1 lg:col-span-2">
        <Btn className={"w-full bg-amber-400"} text={"Contactanos"}/>
      </section>
      <section className="lg:row-start-3 lg:col-span-2">
        <div className="flex rounded-sm bg-indigo-600/20 text-indigo-600 items-center py-2 px-1">
          <p className=" capitalize font-bold ">detalles de producto </p>
          <span className="ml-2 flex-1 border-b-2 "></span>
        </div>
        <div className="p-4">
          {tagsProductos.map((pro,index)=>(
            <li key={`${index}`} className="capitalize list-disc ml-4">{`${pro}`}</li>
          ))}
        </div>
      </section>
      <section className="lg:col-span-2">
        <div className="flex rounded-sm bg-indigo-600/20 text-indigo-600 items-center py-2 px-1">
          <p className=" capitalize font-bold ">descripcion del producto</p>
          <span className="ml-2 flex-1 border-b-2 "></span>
        </div>
        <div className="p-4 ">
          {`${producto.descripcion }`}
        </div>
      </section>
    </main>
  )
}