import React, { useEffect, useState } from 'react';
import {doc, getDoc, getFirestore} from "firebase/firestore";



const ItemBase = () => {

const [product, setProduct] = useState()

    useEffect(() => {
        const db = getFirestore();
      
        const cursoRef = doc(db, "items","1");
      getDoc(cursoRef).then((snapshot) => {
          if (snapshot.exists()){
              setProduct({id: snapshot.id, ...snapshot.data()});
          }
      });
      
      }, []);
      
console.log(product)
      
  return (
    <div>ItemBase</div>
  )
}

export default ItemBase