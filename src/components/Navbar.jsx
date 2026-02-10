import { Btn } from './Btn'
import { Link , NavLink} from 'react-router-dom'

import imge_background from '../assets/Gemini_Generated_Image_6yavu06yavu06yav.png'
import logo from '../assets/logo-lema.png'
import { useState } from 'react'

export function Navbar({categorias}){
  const [showNav,setShowNav] = useState(false)

  return (
    <nav className='z-100 w-full fixed bg-white top-0'>
      <div className='w-10 h-10 bg-amber-300 absolute lg:hidden' onClick={()=>{setShowNav(!showNav)}}></div>
      <section className={'flex justify-between gap-10 items-center border-b-2 border-[#D1D9E6] pl-10 pr-10 capitalize h-15'} >
        <div className={`lg:flex flex-col left-0 top-14 lg:top-0 absolute lg:relative lg:flex-row lg:justify-center lg:gap-2 lg:items-center bg-white ${showNav?'flex':'hidden'}`}>
          {categorias.map(category=>(
            <NavLink key={category.id} 
              to={`/categoria/${category.nombre.toLowerCase()}`}
              className={({ isActive }) => `px-10 py-2 mx-5 my-2 lg:my-0 lg:mx-0 lg:px-5 lg:py-1 rounded-lg hover:bg-indigo-50 ${
                isActive 
                  ? "text-white font-semibold bg-indigo-600 hover:bg-indigo-600" 
                  : "text-gray-600 "}`}
            >{category.nombre}
            </NavLink>
          ))}
        </div>
        <div className='absolute right-0 lg:relative'>
          <Link to='/' ><img className='h-15' src={logo} alt="" /></Link>
        </div>
      </section>
    </nav>
  )
}

export function HeaderMain(){
  return (
    <section style={{ backgroundImage: `url(${imge_background})` }} className="bg-cover bg-center h-96 w-full flex justify-center items-center">
      <div className="flex flex-col items-center gap-5 ">
        <strong className='bg-indigo-300/60 px-4 py-2 border-2 border-indigo-600 rounded-2xl text-indigo-600'>Año escolar 2026</strong>
        <h1 className="text-4xl lg:text-6xl text-indigo-600 font-extrabold text-center">
          <span className='block'>Todo lo que nesesitara para</span>
          <span className='block'>tu inicio de clases</span>
        </h1>
        <p className='text-center'>Todo lo que un estudiante nesesita, crayones calculadoras</p>
        <div className="flex gap-5 flex-row">
          <Btn text={"contactanos"}/>
          <Btn text={"catalogo"}/>
        </div>
      </div>
    </section>
  )
}