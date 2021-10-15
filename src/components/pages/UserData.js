import React from 'react'
import Cookies from 'universal-cookie';
import Datosusuario from '../admin/Datosusuario'
import TablaEventos from '../admin/TablaEventos';




function UserData() {
    const cookies = new Cookies();
    console.log(cookies.get('rol'))
    return (
        
        <div className="userContainer container">
            <h1 className='ext-decoration-underline mx-3'>Bienvenido {cookies.get('correo')}</h1> 
            <Datosusuario/>

            {
                cookies.get('rol')==='Admin'?
                <TablaEventos/>
                :
                <></>
            }
          
        </div>
        
        
    )
}

export default UserData
