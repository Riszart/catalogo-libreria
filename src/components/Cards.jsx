import { Link } from "react-router-dom"
import { Btn } from "./Btn"

export function CardCategoria({categoria}){
  return(
    <div className="relative w-40 aspect-square flex items-end rounded-xl font-bold bg-white border overflow-hidden">
      <img className="h-full w-full" src={categoria.urlImg} alt="" />
      <h4 className="absolute z-10 capitalize pb-8 pl-4">{categoria.nombre}</h4>
    </div>
  )
}

export function CardProduct({producto}) {
  return (
    <article className="w-full lg:w-55 px-8 py-4 mx-5 lg:mx-0 bg-white rounded-xl border-2 border-indigo-600/30">
        <p className="lg:font-bold capitalize text-base lg:text-2xl text-center text-indigo-600 font-bold">{producto.nombre}</p>
      <div className=" aspect-square overflow-hidden border border-indigo-600/30 rounded-t-xl">
        <img src="https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/b/o/boligrafos-escarchados-ove-x-12-colores-9770-default-1.jpg" className="w-full h-full" alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <strong className="bg-indigo-600/30 text-indigo-600 text-xs uppercase text-center p-1">{producto.marca}</strong>
        <p className="font-extrabold text-xl capitalize">S/. <span>{producto.precio}</span></p>
        <Btn text={'contactanos'} className={"w-full"}/>
      </div>
    </article>
  )
}

export function CardBlog({producto}) {
  return (
      <article className="bg-white rounded-md border border-indigo-600/20 p-2">
        <p className="font-bold capitalize text-sm text-center h-10">{producto.nombre}</p>
        <div className="aspect-square rounded-t-lg pb-2 border border-indigo-600/30 overflow-hidden">
          <img src="https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/b/o/boligrafos-escarchados-ove-x-12-colores-9770-default-1.jpg" alt={producto.nombre}/>
        </div>
        <div className="flex flex-col">
          <strong className="text-indigo-600 text-xs uppercase px-4 text-center bg-indigo-600/30 p-1 rounded-b-lg">{producto.marca}</strong>
          {/* <p className="text-gray-600 text-sm">{producto.descripcion}</p> */}
          <strong className="text-gray-600 text-sm my-2">S/. <span>{producto.precio}</span></strong>
        </div>
        <Link to={`/producto/${producto.id}`}>
          <p>ver detalles</p>
        </Link>
        <Btn text={'contactanos'} className="w-full"/>
      </article>    

  )
}