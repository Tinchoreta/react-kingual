import React, { useEffect, useState } from 'react'
import bbdd from '../../bbdd/bbdd.json'
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';



const ItemDetailsContainer = () => {

  const [listaCursos, setListaCursos] = useState([])

  const {detalleId} = useParams();
  // Usamos un efecto para cargar los datos del Json de cursos al montar el componente.

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(bbdd);
      }, 2000)
    })

 
      getData.then(res => {setListaCursos(res.find(curso => curso.id === Parseint(detalleId)))});
 
  }, [])



  return (
    <>
      <ItemDetail curso={listaCursos} />
      
    </>
  )
}
export default ItemDetailsContainer