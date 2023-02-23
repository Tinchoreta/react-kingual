import React, { useState } from 'react'
import './ItemCount.css'


const ItemCount = ({ totalStock ,  initialStock ,  itemTitle ,  onAdd }) => {
    const [initStock, setInitStock] = useState(initialStock)

    const pullItem = ()=>{
        setInitStock (initStock-1)
    }

    const addItem = ()=>{
        setInitStock (initStock+1)
    }




    return (
        <div className='counter'>
            <h4 className='title'>{itemTitle}</h4>
            <div className='itemCounter'>
                <button className="pullItem" disabled={initStock<=1} onClick={pullItem}>-</button><span>{initStock}</span><button className="addItem" disabled={initStock<=totalStock} onClick={addItem}>+</button>
            </div>
            <button id='ItemButton'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
