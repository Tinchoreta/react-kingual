import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'


const pathImgCurso = require.context('../../assets/img/', true) //, /\.jpg$/

const Item = ({ curso = {} }, { key }) => {

    const onAdd = ()=>{
        console.log("Compra")
    }

    return (
        <>

            <div className="card ocultar" key={key}>
                <img src={pathImgCurso(`./${curso.imgUrl}`)} alt={curso.nombre} />
                <div>
                    <p>{curso.nombre}</p>
                    <p className="label-curso"> Nivel: {curso.nivel}</p>
                </div>
                <div>
                    <ItemCount totalStock = {5} initialStock={1} itemTitle = {typeof(curso.nombre!=='undefined')? curso.nombre:"ItemTitle"} onAdd={onAdd} />
                </div>
            </div>
        </>  
    )
}

export default Item