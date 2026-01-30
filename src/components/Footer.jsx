import {Btn} from './Btn'

export function Footer(){
  return (
    <>
      <footer className="flex w-full justify-evenly bg-[#111827] text-white pb-20 pt-20">
        <section>
          <div>logo</div>
          <p className="w-80 mt-4 text-gray-400">Donde tus ideas cobran forma. Encuentra las herramientas perfectas para darle color a tu imaginación y orden a tus proyectos.</p>
        </section>
        <section>
          <h5 className="font-bold capitalize text-xl pb-4">categoria</h5>
          <ul className="text-gray-400 capitalize ">
            <li>sadas</li>
            <li>sadas</li>
            <li>sadas</li>
            <li>sadas</li>
            <li>sadas</li>
          </ul>
        </section>
        <section>
          <h5 className="font-bold capitalize text-xl pb-4">soporte</h5>
          <ul className="text-gray-400 capitalize">
            <li>sasdsdas</li>
            <li>sasdsdas</li>
            <li>sadsdsas</li>
            <li>sadsdsdas</li>
            <li>sadsdsdas</li>
          </ul>
        </section>
        <section>
          <h5 className="font-bold capitalize text-xl pb-4"> Venta por mayor Contactenos</h5>
          <p className="w-80 mt-4 text-gray-400">Si estas interesado contactanos con gusto te responderemos</p>
          <Btn text={'contactanos'}/>
        </section>
      </footer>
      <div className="flex justify-center items-center bg-[#111827] text-gray-500 h-10 border-t">
        <p>asdasdas</p>
      </div>
    </>

  )
}