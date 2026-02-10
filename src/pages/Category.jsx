import { HeaderMain } from "../components/Navbar"
import { CardBlog } from "../components/Cards"
// import { productosData } from '../data/productosData'		

import { useState , useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"

export function Category({productos,categorias}){
	const { category } = useParams()
  
  // const [ productos , setproductos] = useState([])
  // const [ categoria, setcategoria ] = useState([])

  // useEffect(()=>{
  //   async function dowloandData(){ 
  //     const URL_CSV_CATEGORIAS= 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTmmV9LXuB7Z-xyFJEz-_zRVRxaQseY7U0PyZvm7kp0uVj2gbtzLYk_q7LABr4hkDnCTsNxzeXC-fEB/pub?gid=0&single=true&output=csv'
  //     const respuestaCategoria = await new Promise((res, rej)=>{
  //       Papa.parse(URL_CSV_CATEGORIAS, {
  //         download: true,
  //         header: true,
  //         complete: (results) => {
  //           console.log(results)
  //           res(results.data)
  //         },
  //         error: (err) => {rej(err)
  //         }
  //       })
  //     })
  //     setcategoria(respuestaCategoria)

  // 	  const URL_CSV_PRODUCTOS = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTmmV9LXuB7Z-xyFJEz-_zRVRxaQseY7U0PyZvm7kp0uVj2gbtzLYk_q7LABr4hkDnCTsNxzeXC-fEB/pub?gid=1765329098&single=true&output=csv'
  //     const product = await new Promise((res,rej)=>{
  //       Papa.parse(URL_CSV_PRODUCTOS, {
  //         download: true,
  //         header: true,
  //         complete: (results) => {
  //           console.log(results)
  //           res(results.data)
  //         },
  //         error: (err) => {rej(err)}
  //       })
  //     })
  //     setproductos(product)
  //   }
  //   dowloandData()
  // },[])

  // useEffect(() => {
  //   const URL_CSV_CATEGORIAS= 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTmmV9LXuB7Z-xyFJEz-_zRVRxaQseY7U0PyZvm7kp0uVj2gbtzLYk_q7LABr4hkDnCTsNxzeXC-fEB/pub?gid=0&single=true&output=csv'
  //   // if (cargando == false)return
  //   Papa.parse(URL_CSV_CATEGORIAS, {
  //     download: true,
  //     header: true,
  //     complete: (results) => {
  //       setcategoria(results.data)
  //     },
  //     error: (err) => {
  //       console.error("Error al leer el CSV:", err)
  //     }
  //   })
  // }, [])

  // useEffect(() => {
	//   const URL_CSV_PRODUCTOS = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTmmV9LXuB7Z-xyFJEz-_zRVRxaQseY7U0PyZvm7kp0uVj2gbtzLYk_q7LABr4hkDnCTsNxzeXC-fEB/pub?gid=1765329098&single=true&output=csv'

  //   Papa.parse(URL_CSV_PRODUCTOS, {
  //     download: true,
  //     header: true,
  //     complete: (results) => {
  //       setproductos(results.data)
  //       setcargando(false)
  //     },
  //     error: (err) => {
  //       console.error("Error al leer el CSV:", err)
  //     }
  //   })
  // }, [])

  const productSelect= useMemo(()=>{
    const categoriaID = categorias.find((c)=> c.nombre == category)
    return productos.filter((p)=> p.categoria_id == categoriaID.id)
  },[category,productos])

  return (
    <main className="mt-15">
      <section><HeaderMain /></section>
      <section className="grid grid-cols-3 gap-10 p-10 ">
				{productSelect.map(producto=>( 
					<CardBlog key={producto.id} producto={producto} />
				))}
			</section>            
    </main>
  )
}
