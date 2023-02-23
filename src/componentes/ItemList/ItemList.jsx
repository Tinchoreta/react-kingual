import React from 'react'
import Item from '../Item/Item';

const ItemList = ({ data = [] }) => {

  
  return (
    data.map((curso) => (

      <Item curso={curso} key={curso.id}/>
     
    )
    )
  )
}

export default ItemList
