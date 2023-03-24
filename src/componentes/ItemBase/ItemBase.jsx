import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemBase = () => {

  const pathImg = require.context('../../assets/img/', true) //, /\.jpg$/
  const [product, setProduct] = useState()

  useEffect(() => {
    const db = getFirestore();

    const cursoRef = doc(db, "cursos", "1");
    getDoc(cursoRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      }
    });

  }, []);

  //console.log(product)

  return (
    <div>ItemBase
      <img src={pathImg(`./${product.imgUrl}`)} alt="Imagen" />
    </div>
  )
}

export default ItemBase