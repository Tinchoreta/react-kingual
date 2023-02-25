import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Link } from 'react-router-dom';

const pathImgCurso = require.context('../../assets/img/', true) //, /\.jpg$/

const Item = ({ curso = {} }, { key }) => {

    const onAdd = (quantity)=>{
        console.log(`Compraste: ${quantity} de: ${curso.nombre}`)
    }

    return (
        <>

            <div className="card ocultar" key={key}>
                <Link to={`/detalle/${curso.id}`}>
                    <img src={pathImgCurso(`./${curso.imgUrl}`)} alt={curso.nombre} />
                </Link>
                <div>
                     <Link to={`/detalle/${curso.id}`}>
                        <p>{curso.nombre}</p>
                    </Link>
                </div>
                <div>
                    <ItemCount totalStock = {5} initialStock={0} itemTitle = {typeof(curso.nombre!=='undefined')? curso.nombre:"ItemTitle"} onAdd={onAdd} />
                </div>
            </div>
        </>  
    )
}

export default Item