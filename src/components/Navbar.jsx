import { Link , NavLink} from 'react-router-dom'
export function Navbar(){
  return (
    <nav className='z-100 w-full fixed bg-white top-0'>
      {/* <section className=' flex justify-between gap-10 items-center  h-15 pl-10 pr-10 box-border'>
        <div>Libreria</div>
        <div className='flex gap-10 items-center capitalize'>
          <Link to={'/'}>inicio</Link>
          <Link >Sobre nosotros</Link>
          <Link >contactanos</Link>
        </div>
      </section> */}
      <section className='flex justify-between gap-10 items-center border-b-2 border-[#D1D9E6] pl-10 pr-10 capitalize h-15'>
        <div className='flex justify-center gap-10 items-center'>
          <NavLink to='boligrafos'>papeleria</NavLink>
          <NavLink to='boligrafos'>cuadernos</NavLink>
          <NavLink to='boligrafos'>boligrafos</NavLink>
          <NavLink to='boligrafos'>boligrafos</NavLink>
        </div>
        <div>
          logo
        </div>
      </section>
    </nav>
  )
}