import React, { useEffect, useState } from 'react'
import bbdd from '../../bbdd/bbdd.json'
import ItemList from '../ItemList/ItemList';


const cursoImage = require.context('../../assets/img/', true,);

const ItemListContainer = ({ greeting }) => {

  const [listaCursos, setListaCursos] = useState([])

  // Usamos un efecto para cargar los datos del Json de cursos al montar el componente.

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(bbdd);
      }, 3000)
    })
    getData.then(res => setListaCursos(res));
    console.log(listaCursos)

  }, [])



  return (
    <>
      <p>{greeting}</p>
      <ItemList data={listaCursos} />

    </>
  )
}

export default ItemListContainer