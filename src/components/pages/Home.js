import React from 'react'
import Carousel from '../Carousel'
import Cards from '../Cards'
import '../../App.css'


function Home() {
    return (
        <>
        <Carousel/>
        <h1 className='text-decoration-underline'>Ultimos eventos</h1>
        <Cards/>
        
            
        </>
    )
}

export default Home
