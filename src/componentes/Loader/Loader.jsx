import React, { useEffect, useState } from 'react'
import './Loader.css'

import App from '../../App';


const Loader = (loading) => {


    const [loadingState, setLoadingState] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoadingState(false)
        }, 3000);

        return () => {
            
        }
    }, [])

    
    if (loadingState && loading) {
        return (
            <div class="loader">
                <div class="spinner"></div>
                <div class="message">Cargando...</div>
            </div>
        );

    }
    else{
        return(
      <App />
      );

    }

        
        
        
      
}

export default Loader