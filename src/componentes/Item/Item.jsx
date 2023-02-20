import React from 'react'
import './Item.css' 

const cursoImage = require.context('../../assets/img/',true)

const Item = ({nombreCurso}, {nivelCurso}, {imgCurso}) => {
  return (
      <div className="card ocultar">
          <img src={cursoImage(`./English/Curso-English-Principiante-A1.jpg`)} alt="Curso Inglés A1" />
          <div>
              <p>Curso inglés principiante</p>
              <p className="label-curso">Inglés A1</p>
          </div>
          <div>
              <button className="card-button">AGREGAR</button>
          </div>
      </div>
  )
}

export default Item