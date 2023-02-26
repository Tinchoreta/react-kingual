import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


const pathImgCurso = require.context('../../assets/img/', true) //, /\.jpg$/

const ItemDetail = ({ curso = {} }) => {

    const onAdd = (quantity)=>{
        console.log(`Compraste: ${quantity} de: ${curso.nombre}`)
    }

    return (
        <>
            {
                Object.entries(curso).length !== 0?
                    <div className="cardDetail" key={curso.id}>
                        <img src={pathImgCurso(`./${curso.imgUrl}`)} alt={curso.nombre} />
                        <div>
                            <p>{curso.nombre}</p>
                            <p className="label-curso"> Nivel: {curso.nivel}</p>
                            <p>{curso.moneda}: ${curso.precio}</p>
                        </div>
                        <div>
                            <ItemCount totalStock = {5} initialStock={0} itemTitle = {typeof(curso.nombre!=='undefined')? curso.nombre:"ItemTitle"} onAdd={onAdd} />
                        </div>
                    </div>
                :<div>No se encontró curso</div>
            }
            
        </>  
    )
}

export default ItemDetail