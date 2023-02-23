import React from 'react'
import './ItemCount.css'

const ItemCount = ({ totalStock }, { initialStock }, { itemTitle }, { onAdd }) => {
    return (
        <div className='counter'>
            <h4 className='title'>{itemTitle}</h4>
            <div className='itemCounter'>
                <button className="pullItem">-</button><span>{initialStock}</span><button className="addItem">+</button>
            </div>
            <button id='ItemButton'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
