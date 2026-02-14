import {Btn} from './Btn'
import { useEffect, useState } from 'react'
import logo from '../assets/logo-lema.png'

export function Footer({categorias,className}){

  const [marcas,setMarcas] = useState([])
  useEffect(()=>{
    fetch('/data/brand.json')
      .then(res => res.json())
      .then(data => setMarcas(data))
      .catch(err => console.error("error cargando marcas",err))
  },[])


  return (
    <section>
      <footer className={`flex flex-col lg:flex-row w-full justify-evenly bg-[#111827] text-white pb- lg:pb-20 lg:pt-20 p-5 ${className}`}>
        <section>
          <div className=' flex justify-center '><img src={logo} alt="" className='h-30'/></div>
          <p className="lg:w-80 mt-4 text-gray-400 text-justify">Donde tus ideas cobran forma. Encuentra las herramientas perfectas para darle color a tu imaginación y orden a tus proyectos.</p>
        </section>
        <section className='mt-4 lg:mt-0'>
          <h5 className="font-bold capitalize text-xl lg:pb-4">categoria</h5>
          <ul className="text-gray-400 capitalize ">
            {categorias.map((categoria)=>(
              <li key={categoria.id}>{categoria.nombre}</li>
            ))}
          </ul>
        </section>
        <section className='mt-4 lg:mt-0'>
          <h5 className="font-bold capitalize text-xl lg:pb-4">Marcas originales</h5>
          <ul className="text-gray-400 capitalize">
            {marcas.map(marca=>( 
              <li key={marca.id}>{marca.nombre}</li>
            ))}
          </ul>
        </section>
        <section className='mt-4 lg:mt-0'>
          <h5 className="font-bold capitalize text-xl lg:pb-4"> Venta por mayor Contactenos</h5>
          <p className="mb-5 lg:w-80 lg:mt-4 text-gray-400">Si estas interesado contactanos, con gusto te responderemos</p>
          <div className='w-full text-center'>
            <Btn text={'contactanos'} className={"bg-green-500"}/>
          </div>
          <h4 className='text-xl font-bold mt-2'>Visitanos:</h4>
          <p className='text-gray-100/70 text-base '><span className='font-semibold'>Dirección: </span> Avenida 15 de julio Zona I Lote 26</p>
          <p className='text-gray-100/70 text-base '><span className='font-semibold'>Referencia: </span>Frente al colegio N°1248 ( 5 de Abril )</p>
        </section>
      </footer>
      <div className="flex justify-center items-center bg-[#111827] text-gray-500 h-10 border-t">
        <p>@2026 Todos los derechos reservados</p>
      </div>
    </section>
  )
}