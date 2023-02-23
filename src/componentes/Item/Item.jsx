import React from 'react'
import './Item.css'


const pathImgCurso = require.context('../../assets/img/', true) //, /\.jpg$/

const Item = ({ curso = {} }, { key }) => {


    return (
        <>

            <div className="card ocultar" key={key}>
                <img src={pathImgCurso(`./${curso.imgUrl}`)} alt={curso.nombre} />
                <div>
                    <p>{curso.nombre}</p>
                    <p className="label-curso">{curso.nivel}</p>
                </div>
                <div>
                    <button className="card-button">AGREGAR</button>
                </div>
            </div>
        </>
    )
}

export default Item