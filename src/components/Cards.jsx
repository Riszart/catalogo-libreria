import { Btn } from "./Btn"

export function CardCategoria(){
  return(
    <div className="w-50 aspect-square flex items-end rounded-xl font-bold bg-white border">
      <h4 className="capitalize pb-8 pl-4">nombre categoria</h4>
    </div>
  )
}

export function CardProduct(){
  return (
    <article className="w-55 p-4 bg-white rounded-xl">
      <div className=" aspect-square border rounded-xl"></div>
      <div className="flex flex-col gap-2">
        <strong className="text-blue-600 text-xs uppercase ">categoria</strong>
        <p className="font-bold capitalize text-2xl">nam ssf dsde</p>
        <p className="font-extrabold text-xl capitalize">12.5 S./</p>
        <Btn text={'contactanos'}/>
      </div>
    </article>
  )
}