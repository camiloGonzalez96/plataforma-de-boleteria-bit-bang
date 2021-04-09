import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
    return (
        <>
        

        <div className="card h-100">
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
        </div>

        
            
        </>
    )
}

export default CardItem
