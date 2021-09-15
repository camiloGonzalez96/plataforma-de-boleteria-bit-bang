import React from 'react'
import Cookies from 'universal-cookie';



function UserData({nombre}) {
    const cookies = new Cookies();
    return (
        
        <div className="userContainer container">
            <h1 >Bienvenido {cookies.get('correo')}</h1>            
          
        </div>
        
        
    )
}

export default UserData
