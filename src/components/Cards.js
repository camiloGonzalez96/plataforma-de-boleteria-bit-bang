import React from 'react'
import CardItem from './CardItem'
import './components.css'
import {useFetch} from './useFetch'


function Cards() {
    const eventos=useFetch('http://eventoschoclobd.herokuapp.com/api/eventos')
    const {loading,data}=eventos

    
    return (
        <>
         <div className='container-cards'>                
                <ul className='cards'>
                   {
                        loading
                        ?
                        <div className="spinner-border text-dark" role="status">
                            <span className="sr-only">Loading...</span>
                            {console.log('cargando')}
                        </div>
                        
                        :                        
                        data.data.map(e=>(
                            <li className='cards-item m-2' key={e.id_producto}>                        
                            <CardItem
                            src={e.url_imagen}
                            description={e.disponibilidad}   
                            title={e.nombre_evento}    
                            id={e.id}
                            fecha={e.fecha_evento}
                            hora={e.hora_evento}
                            aforo={e.aforo_evento}
                            precio={e.precio_entrada}
                            />
                        </li>                         
                        
                        ))                    
                        
                    }
                </ul>
            </div>
            
        </>
            
        
    )
}

export default Cards
