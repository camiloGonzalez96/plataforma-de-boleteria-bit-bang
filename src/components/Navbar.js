import React from 'react'
import {Link} from 'react-router-dom'

import Cookies from 'universal-cookie';

function Navbar() {
    const cookies = new Cookies();
    var botonLogin =''
    var botonRegistro=''
   if( cookies.get('correo')){
       botonLogin='Cerrar Sesión'
       botonRegistro=cookies.get('nombre')

   }else{
       botonLogin='Iniciar Sesión'
       botonRegistro='Regístrate'    
    }  

    function btnSesion(){
        if(botonLogin==='Cerrar Sesión'){
            cookies.remove('id',{ path: '/' })
            cookies.remove('nombre',{ path: '/' })
            cookies.remove('apellido',{ path: '/' })
            cookies.remove('correo',{ path: '/' })
            window.location = '/login';
        }else{
            window.location = '/login';
        }
    }
    function btnUser(){
        if(botonRegistro==='Regístrate'){           
            window.location = '/register';
        }else{
            window.location = '/user';
        }
    }
        
    
    return (
        <>

        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#201F1F"}} >  
                <a className="navbar-brand mb-0 h1 mr-auto mx-5" href="/">
                    <img src="./logomaiz.png" alt="logo-eventos-choclo" width="60" height="60"/>
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
                    <button  className="nav-item btn btn-outline-light mx-3" onClick={btnSesion}>{botonLogin}</button>
                    <button  className="nav-item btn btn-outline-light mx-3" onClick={btnUser}>{botonRegistro}</button>
                </div>
                </div>
                
                
                       
            
        </nav>
           
            
        </>
    )
}

export default Navbar
