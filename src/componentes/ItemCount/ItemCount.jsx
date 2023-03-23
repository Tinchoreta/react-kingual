
import './ItemCount.css'
import React, { useState, useEffect } from 'react'


const ItemCount = ({ totalStock, initialStock, onAdd }) => {
    const [stock, setStock] = useState(initialStock)

    const pullItem = () => {
        setStock(stock - 1)
    }

    const addItem = () => {
        setStock(stock + 1)
    }

    useEffect(() => {
        setStock(initialStock)


    }, [initialStock])




    return (
        <div className='counter'>

            <div className='itemCounter'>
                <button className="pullItem" disabled={stock <= initialStock} onClick={pullItem}>-</button>
                <span>{stock}</span>
                <button className="addItem" disabled={stock >= totalStock} onClick={addItem}>+</button>
            </div>
            <button id='ItemButton' disabled={stock <= 0} onClick={() => { onAdd(stock) }}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
