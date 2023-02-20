import React, { useEffect, useState } from 'react'

const cursoImage = require.context('../../assets/img/',true)
const URL= "../../bbdd/bbdd.json"

const ItemListContainer = ({greeting}) => {

  
  const [listaCursos, setListaCursos] = useState([])

  // Usamos un efecto para cargar los datos del Json de cursos al montar el componente.

  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(dataJson => setListaCursos(dataJson.results))
  }, [])

  return (
    <>
      <p>{greeting}</p>
      {
        listaCursos.map(curso =>(
          <div className="card ocultar">
              <img src={cursoImage(`${curso.imgUrl}`)} alt={curso.nombre} />
              <div>
                  <p>{curso.nombre}</p>
                  <p className="label-curso">{curso.nivel}</p>
              </div>
              <div>
                  <button className="card-button">AGREGAR</button>
              </div>
          </div>
        )
        )
      }
    </>
  )
}

export default ItemListContainer