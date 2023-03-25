import React, { useEffect, useState } from 'react'
import bbdd from '../../bbdd/bbdd.json'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemDetailsContainer = () => {

  const [listaCursos, setListaCursos] = useState([])

  const { detalleId } = useParams();
  // Usamos un efecto para cargar los datos del Json de cursos al montar el componente.

  useEffect(() => {
    const db = getFirestore();

    const cursoRef = doc(db, "cursos", detalleId);
    getDoc(cursoRef).then((snapshot) => {
      if (snapshot.exists()) {
        setListaCursos({ id: snapshot.id, ...snapshot.data() });
      }
    });
     
  }, [])



  return (
    <>
      <div className="container">
        <ItemDetail curso={listaCursos} />
      </div>
    </>
  )
}
export default ItemDetailsContainer