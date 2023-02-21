import React from 'react'

const ItemList = ({ data = [] }) => {
  const pathImg = require.context('../../assets/img',true, /\.jpg$/);
  
  return (
    data.map((curso) => (

      <div className="card ocultar" key={curso.id}>
        <img src={pathImg(`./${curso.imgUrl}.jpg`)} alt={curso.nombre} />
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
  )
}

export default ItemList
