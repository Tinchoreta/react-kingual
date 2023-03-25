import React, { useEffect, useState } from 'react'
// import bbdd from '../../bbdd/bbdd.json' //ya no uso el mock de bbdd sino que utilizo firebase
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where, orderBy } from "firebase/firestore";




const ItemListContainer = () => {

  const [listaCursos, setListaCursos] = useState([])

  const { categoriaId } = useParams();
  // Usamos un efecto para cargar los datos del Json de cursos al montar el componente.

  
  useEffect(() => {
    const db = getFirestore();

    const cursoRefCollection = collection(db, 'cursos');
    
    const cursoOrdenadoPorId = query(cursoRefCollection, orderBy('id')); 

      getDocs(cursoOrdenadoPorId).then((snapshot) => {
        if (snapshot === 0) {
          console.log("No hay resultados cuando busco por categoria")
        }
        setListaCursos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  
      })
     
    if (categoriaId) {
      const cursoPorCategoria = query(cursoRefCollection, where('idioma', '==', categoriaId));
      getDocs(cursoPorCategoria).then((snapshot) => {
        if (snapshot === 0) {
          console.log("No hay resultados cuando busco por categoria")
        }
        setListaCursos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  
      })
    }
    else
    getDocs(cursoOrdenadoPorId).then((snapshot) =>  setListaCursos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))))

  }, [categoriaId])
 



  return (
    <>
      <div className='container'>
        <ItemList data={listaCursos} />
      </div>
    </>
  )
}

export default ItemListContainer