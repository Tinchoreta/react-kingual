import React, { useEffect, useState } from 'react'
import bbdd from '../../bbdd/bbdd.json'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({ greeting }) => {

  const [listaCursos, setListaCursos] = useState([])

  const {categoriaId} = useParams();
  // Usamos un efecto para cargar los datos del Json de cursos al montar el componente.

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(bbdd);
      }, 2000)
    })

    if (categoriaId){
      getData.then(res => {setListaCursos(res.filter(curso => curso.idioma === categoriaId))});
    }
    else
    getData.then(res => { setListaCursos(res)});
    

  }, [categoriaId])



  return (
    <>
      <div className='container'>
        <ItemList data={listaCursos} />
      </div>
    </>
  )
}

export default ItemListContainer