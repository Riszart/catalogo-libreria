import { Btn } from "../components/Btn"
import { CardCategoria, CardProduct } from "../components/Cards"

export function Inicio(){
  return (
    <main className="mt-30">
      <section className="">
        <div className="flex flex-col items-center gap-5 mt-10 mb-10">
          <strong>Año escolar 2026</strong>
          <h1 className="text-5xl font-bold">Todo lo que nesesitara para tu inicio de clases</h1>
          <p>todo lo que un estudiante nesesita, crayones calculadoras</p>
          <div className="flex gap-5">
            <Btn text={"contactanos"}/>
            <Btn text={"catalogo"}/>
          </div>
        </div>
      </section>
      <section className="bg-white pb-10">
        <div className="h-20 flex justify-between items-center p-10 capitalize font-bold text-2xl">
          <h3 className="text-[#84A5B8]">categoria</h3>
          <span className="text-sm text-blue-600 uppercase">ver todos</span>
        </div>
        <div className="flex gap-5 justify-center">
          <CardCategoria/>
          <CardCategoria/>
          <CardCategoria/>
          <CardCategoria/>
          <CardCategoria/>
        </div>
      </section>
      <section className="pb-10">
        <div className="h-20 flex justify-between items-center p-10 capitalize font-bold text-2xl">
          <h3 className="text-[#84A5B8]">lo mas visto</h3>
          <span className="text-sm text-blue-600 uppercase">ver todos</span>
        </div>
        <div className="flex justify-center gap-5">
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
        </div>
      </section>
      <section>
        <div className="h-20 flex justify-between items-center p-10 capitalize font-bold text-2xl">
          <h3 className="text-[#84A5B8]">marcas</h3>
        </div>
      </section>
    </main>
  )
}