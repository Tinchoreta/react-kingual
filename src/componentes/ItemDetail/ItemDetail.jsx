import React from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


const pathImgCurso = require.context('../../assets/img/', true) //, /\.jpg$/

const ItemDetail = ({ curso = {} }) => {

    const {addProduct} = useCartContext();

    const onAdd = (item, quantity)=>{
        console.log(`Compraste: ${quantity} de: ${curso.nombre}`)
        addProduct(curso, quantity);    
    }

    return (
        <>
            {
                Object.entries(curso).length !== 0?
                    <><div className="cardDetail" key={curso.id}>
                        <img src={pathImgCurso(`./${curso.imgUrl}`)} alt={curso.nombre} />
                        <div className='detalleCurso'>
                            <h2>{curso.nombre}</h2>
                            <p className="nivelCurso"> Nivel: {curso.nivel}</p>
                            <p className="detalleCurso">Detalles: {curso.detalles}</p>
                            <p className="precioCurso" >{curso.moneda}: ${curso.precio}</p>
                        </div>
                    <div className='counter'>
                        <ItemCount totalStock={5} initialStock={0} onAdd={onAdd} />
                    </div>
                    </div>
                    </>
                :<p>Buscando curso...</p>
                
            }
        
            
        </>  
    )
}

export default ItemDetail