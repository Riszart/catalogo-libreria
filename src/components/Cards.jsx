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
    <article className="w-full lg:w-55 p-8 mx-5 lg:mx-0 bg-white rounded-xl">
      <div className=" aspect-square border rounded-xl overflow-hidden">
        <img src="" className="w-full h-full" alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <strong className="text-blue-600 text-xs uppercase mt-2">{producto.marca}</strong>
        <p className="font-semibold lg:font-bold capitalize text-base lg:text-2xl">{producto.nombre}</p>
        <p className="font-extrabold text-xl capitalize">S/.<span>{producto.precio}</span></p>
        <Btn text={'contactanos'} className={"w-full"}/>
      </div>
    </article>
  )
}

export function CardBlog({producto}) {
  return (
    <article className="w-80 bg-white rounded-xl">
      <div className="aspect-square rounded-t-xl">
        <img src={producto.image} alt={producto.nombre}/>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <strong className="text-blue-600 text-xs uppercase ">{producto.marca}</strong>
        <p className="font-bold capitalize text-2xl">{producto.nombre}</p>
        <p className="text-gray-600 text-sm">{producto.descripcion}</p>
        <strong className="text-gray-600 text-sm"><span>{producto.precio}</span>S/.</strong>
      </div>
      <Btn text={'contactanos'} className="w-full"/>
    </article>
  )
}