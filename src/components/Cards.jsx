import { Btn } from "./Btn"

export function CardCategoria({categoria}){
  return(
    <div className="w-50 aspect-square flex items-end rounded-xl font-bold bg-white border">
      <h4 className="capitalize pb-8 pl-4">{categoria.nombre}</h4>
    </div>
  )
}

export function CardProduct({producto}) {
  return (
    <article className="w-55 p-4 bg-white rounded-xl">
      <div className=" aspect-square border rounded-xl"></div>
      <div className="flex flex-col gap-2">
        <strong className="text-blue-600 text-xs uppercase ">{producto.marca}</strong>
        <p className="font-bold capitalize text-2xl">{producto.nombre}</p>
        <p className="font-extrabold text-xl capitalize">S/.<span>{producto.precio}</span></p>
        <Btn text={'contactanos'}/>
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