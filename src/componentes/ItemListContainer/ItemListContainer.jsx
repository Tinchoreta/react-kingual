import React, { useEffect, useState } from 'react'
// import bbdd from '../../bbdd/bbdd.json' //ya no uso el mock de bbdd sino que utilizo firebase
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore";




const ItemListContainer = () => {

  const [listaCursos, setListaCursos] = useState([])

  const { categoriaId } = useParams();
  // Usamos un efecto para cargar los datos del Json de cursos al montar el componente.

  
  useEffect(() => {
    const db = getFirestore();

    const cursoRefCollection = collection(db, 'cursos');
    getDocs(cursoRefCollection).then((snapshot) => {
      if (snapshot === 0) {
        console.log("No hay resultados")
      }
      setListaCursos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

    })

    if (categoriaId) {
      getData.then(res => { setListaCursos(res.filter(curso => curso.idioma === categoriaId)) });
    }
    else
      getData.then(res => { setListaCursos(res) });


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