import {Btn} from './Btn'
import { useEffect, useState } from 'react'
import logo from '../assets/logo-lema.png'

export function Footer(){
  const [categoria,setCategorias] = useState([])

  useEffect(()=>{
    fetch('/data/category.json')
      .then(res => res.json())
      .then(data => setCategorias(data))
      .catch(err => console.error("error cargando categorias",err))
  })

  const [marcas,setMarcas] = useState([])
  fetch('/data/brand.json')
    .then(res => res.json())
    .then(data => setMarcas(data))
    .catch(err => console.error("error cargando marcas",err))

  return (
    <>
      <footer className="flex w-full justify-evenly items-center bg-[#111827] text-white pb-20 pt-20">
        <section>
          <div className='flex justify-center'><img src={logo} alt="" className='h-30'/></div>
          <p className="w-80 mt-4 text-gray-400">Donde tus ideas cobran forma. Encuentra las herramientas perfectas para darle color a tu imaginación y orden a tus proyectos.</p>
        </section>
        <section>
          <h5 className="font-bold capitalize text-xl pb-4">categoria</h5>
          <ul className="text-gray-400 capitalize ">
            {categoria.map((categoria)=>(
              <li key={categoria.id}>{categoria.nombre}</li>
            ))}
          </ul>
        </section>
        <section>
          <h5 className="font-bold capitalize text-xl pb-4">Marcas originales</h5>
          <ul className="text-gray-400 capitalize">
            {marcas.map(marca=>( 
              <li key={marca.id}>{marca.nombre}</li>
            ))}
          </ul>
        </section>
        <section>
          <h5 className="font-bold capitalize text-xl pb-4"> Venta por mayor Contactenos</h5>
          <p className="mb-5 w-80 mt-4 text-gray-400">Si estas interesado contactanos con gusto te responderemos</p>
          <Btn text={'contactanos'}/>
        </section>
      </footer>
      <div className="flex justify-center items-center bg-[#111827] text-gray-500 h-10 border-t">
        <p>asdasdas</p>
      </div>
    </>

  )
}