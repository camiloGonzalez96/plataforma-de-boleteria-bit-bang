import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <>
        <h1>Eventos</h1>
        <div className="container">
        
        <div className="row row-cols-1  row-cols-md-3 g-4">
            <div className="col">
                <CardItem
                src="./images/05.jpg"
                title="Concieto 1"
                description="ONLINE"                
                />
            </div>
            <div className="col">
                <CardItem
                src="./images/05.jpg"
                title="Concieto 2"
                description="ONLINE" 
                />
            </div>
            <div className="col">
                <CardItem
                src="./images/05.jpg"
                title="Concieto 3"
                description="ONLINE"  
                />
            </div>
            <div className="col">
                <CardItem
                src="./images/05.jpg"
                title="Concieto 4"
                description="ONLINE" 
                />
            </div>
            <div className="col">
                <CardItem
                src="./images/05.jpg"
                title="Concieto 5"
                description="ONLINE" 
                />
            </div>
            <div className="col">
                <CardItem
                src="./images/05.jpg"
                title="Concieto 6"
                description="ONLINE" 
                />
            </div>

        </div>

        </div>
            
        </>
    )
}

export default Cards