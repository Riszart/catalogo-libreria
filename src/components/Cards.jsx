import { Link } from "react-router-dom"
import { Btn } from "./Btn"

export function CardCategoria({categoria}){
  return(
    <div className="relative w-40 aspect-square flex items-end rounded-xl font-bold bg-white border overflow-hidden">
      <img className="h-full w-full" src={categoria.urlImg} alt={categoria.nombre} />
      <h4 className="absolute z-10 capitalize pb-8 pl-4">{categoria.nombre}</h4>
    </div>
  )
}

export function CardProduct({producto}) {
  return (
    <article className="w-full lg:w-55 px-8 lg:px-4 py-4 lg:py-2 mx-5 lg:mx-0 bg-white rounded-xl border-2 border-indigo-600/30 lg:border-indigo-600/10">
        <p className="lg:font-bold capitalize text-base lg:text-md text-center text-indigo-600 font-bold lg:h-20 ">{producto.nombre}</p>
      <div className=" aspect-square overflow-hidden border border-indigo-600/30 rounded-t-xlv lg:mx-4 lg:p-4">
        <img src={producto.url_img} className="w-full h-full" alt={`${producto.nombre}`} />
      </div>
      <div className="flex flex-col gap-2">
        <strong className="bg-indigo-600/30 text-indigo-600 text-xs uppercase text-center p-1 lg:mx-4">{producto.marca}</strong>
        <p className="font-extrabold text-xl capitalize">S/. <span>{producto.precio}</span></p>
        <Btn text={'contactanos'} className={"w-full bg-indigo-600"}/>
      </div>
    </article>
  )
}

export function CardBlog({producto}) {
  console.log(producto.url_img)
  return (
      <article className="bg-white rounded-md border border-indigo-600/20 p-2 lg:w-full">
        <p className="font-bold capitalize text-sm text-center h-10">{producto.nombre}</p>
        <div className="aspect-square rounded-t-lg pb-2 border border-indigo-600/30 overflow-hidden">
          <img src={`${producto.url_img}`} alt={producto.nombre}/>
        </div>
        <div className="flex flex-col">
          <strong className="text-indigo-600 text-xs uppercase px-4 text-center bg-indigo-600/30 p-1 rounded-b-lg">{producto.marca}</strong>
          {/* <p className="text-gray-600 text-sm">{producto.descripcion}</p> */}
          <strong className="text-gray-600 text-sm my-2">S/. <span>{producto.precio}</span></strong>
        </div>
        <Link to={`/producto/${producto.id}`}>
          <p className="bg-indigo-600 rounded-lg py-2 text-center mb-2 capitalize font-bold text-white active:bg-indigo-200 active:text-indigo-600">ver producto</p>
        </Link>
        <Btn text={'contactanos'} className="w-full bg-green-500"/>
      </article>    
  )
}