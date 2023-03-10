import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Link } from 'react-router-dom';

const pathImgCurso = require.context('../../assets/img/', true) //, /\.jpg$/

const Item = ({ curso = {} }) => {

    const onAdd = (quantity)=>{
        console.log(`Compraste: ${quantity} de: ${curso.nombre}`)
    }

    return (
        <>
        ¨{
            Object.entries(curso).length !== 0?
            <div className="card ocultar" key={curso.id}>
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
            : <div>No encontrado</div>
        }
        </>  
    )
}

export default Item