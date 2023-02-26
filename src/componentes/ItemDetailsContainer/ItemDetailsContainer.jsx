import React, { useEffect, useState } from 'react'
import bbdd from '../../bbdd/bbdd.json'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';



const ItemDetailsContainer = () => {

  const [listaCursos, setListaCursos] = useState([])

  const {detalleId} = useParams();
  // Usamos un efecto para cargar los datos del Json de cursos al montar el componente.

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(bbdd);
      }, 1000)
    })

 
      getData.then(res => {setListaCursos(res.find(curso => curso.id === parseInt(detalleId)))});
 
  }, [])



  return (
    <>
        <div className="container">
            <ItemDetail curso={listaCursos} />
        </div>
    </>
  )
}
export default ItemDetailsContainer