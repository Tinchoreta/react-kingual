import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemList from '../ItemList/ItemList';


const ItemsBase = () => {

  //const pathImg = require.context('../../assets/img/', true) //, /\.jpg$/
  const [products, setProducts] = useState()

  useEffect(() => {
    const db = getFirestore();

    const cursoRefCollection = collection(db, 'cursos');
    getDocs(cursoRefCollection).then((snapshot) => {
      if (snapshot === 0) {
        console.log("No hay resultados")
      }
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

    })


  }, []);

  // console.log(products)

  return (
    <React.Fragment>
      <ItemList data={products}></ItemList>
    </React.Fragment>

  )
}

export default ItemsBase