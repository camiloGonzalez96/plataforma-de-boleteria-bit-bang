import React from 'react'
import {Link} from 'react-router-dom'


function CardItem(props) {
    let disponible = props.description
    let disponibilidad=''
    let claseDis=''
    if(disponible>0){
        disponibilidad='Disponible'
        claseDis='card-title titulo text-white badge text-wrap disponible'
    }else{
        disponibilidad='Agotado'
        claseDis='card-title titulo text-white badge text-wrap agotado'
 
    }
    return (
        <>
        <Link to={`/evento/${props.id}`} className='text-decoration-none'>
        <div className="card h-100 m-3" style={{width:'12rem', height:'4rem'}} >
            <img src={props.src} class="card-img" alt="..."/>
                <div className="card-img-overlay ">
                    <h5 className={claseDis}>{disponibilidad}</h5>                                    
                </div>
                <div className="card-footer bg-dark">                    
                     <p className="card-text text-center  text-white ">{props.title}</p>   
                </div>
                
        </div>
        </Link>
       

       {/*  <div className="card h-100">
            <div className="card-header">
                 <img src={props.src} className="card-img-top " alt="..."/>
            </div>            
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>                    
                </div>
                <div className="card-footer">                    
                    <Link to="/" className="btn btn-primary">Comprar Acceso</Link>
                </div>
        </div> */}


            
        </>
    )
}

export default CardItem
