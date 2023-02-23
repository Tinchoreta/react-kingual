import React from 'react'
import Item from '../Item/Item';

const ItemList = ({ data = [] }) => {

  
  return (
    data.length>0? data.map((curso) => (<Item curso={curso} key={curso.id}/>)):<p>Cargando items...</p>
  )
}

export default ItemList
