import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>

        <nav className="navbar navbar-expand-lg navbar-dark  bg-primary" >  
                <a className="navbar-brand mb-0 h1 mr-auto mx-5" href="/">
                    <img src="./logomaiz.png" alt="logo-eventos-choclo" width="30" height="24"/>
                    Eventos Choclo
                </a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link " to="/">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/eventos">
                                Eventos
                            </Link>
                        </li>
                    </ul >
                    <div className="navbar-nav ">
                    <Link to="/"  className="nav-item btn btn-outline-light ">Iniciar Sesión</Link>
                    <Link  to="/" className="nav-item btn btn-outline-light mx-2" >  Regístrate  </Link>
                </div>
                </div>
                
                
                       
            
        </nav>
           
            
        </>
    )
}

export default Navbar
