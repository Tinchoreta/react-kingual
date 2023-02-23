import React, { useEffect, useState } from 'react'
import bbdd from '../../bbdd/bbdd.json'
import ItemList from '../ItemList/ItemList';




const ItemListContainer = ({ greeting }) => {

  const [listaCursos, setListaCursos] = useState([])

  // Usamos un efecto para cargar los datos del Json de cursos al montar el componente.

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(bbdd);
      }, 3000)
    })
    getData.then(res => {
      setListaCursos(res)
      //console.log(res)
    });
    

  }, [])



  return (
    <>
      <p>{greeting}</p>
      <div className='container'>
        <ItemList data={listaCursos} />
      </div>
    </>
  )
}

export default ItemListContainer