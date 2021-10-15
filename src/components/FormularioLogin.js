import React,{useState} from 'react'
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';

function FormularioLogin() {    
    const cookies = new Cookies();
    if(cookies.get('id')){window.location='/'}
    const [correo,setCorreo]=useState('')
    const [contraseña,setContraseña]=useState('')

    const data={       
        correo_usuario:correo,       
        contraseña_usuario:contraseña
    }

    const submit = async e =>{
        e.preventDefault();       
        
            const body =data
            await fetch("https://eventoschoclobd.herokuapp.com/api/auth/login",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
                  }).then(resp => resp.json()).then(data => {   
                    console.log(data)
                    if(data.data){                        
                        let respuesta=data.data
                        setCorreo('')
                        setContraseña('')
                        
                        //cookies
                        console.log(respuesta)
                        cookies.set('token',data.token,{ path: '/' })
                        cookies.set('id',respuesta[0],{ path: '/' })
                        cookies.set('nombre',respuesta[1],{ path: '/' })
                        cookies.set('apellido',respuesta[2],{ path: '/' })
                        cookies.set('correo',respuesta[3],{ path: '/' })
                        cookies.set('celular',respuesta[4],{ path: '/' })
                        cookies.set('rol',respuesta[5],{ path: '/' })
                        //window.location = '/user';
                    }else{
                        Swal.fire(
                            'Error!',
                            data.message,
                            'error'
                          )
                          setCorreo('')
                          setContraseña('')
                    }
                    
                
                })
            

    }



    return (
        <>
    {console.log(correo, contraseña)}
        
        <form  onSubmit={submit} >
            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Correo Electrónico</label>
                <input type="email" id="form2Example1" class="form-control" placeholder="Ingesa tu correo electrónico..." value={correo}
                    onChange={e=>setCorreo(e.target.value)}/>
                
            </div>

            {/*<!-- Password input -->*/}

            <div class="form-outline mb-4">
                 <label class="form-label" for="form2Example2">Contraseña</label>
                <input type="password" id="form2Example2" class="form-control" placeholder="Ingesa tu contraseña..." value={contraseña}
                    onChange={e=>setContraseña(e.target.value)} />
                
            </div>

            {/*<!-- Submit button -->*/}

            <button type="submit" class="btn btn-outline-primary btn-block mb-4" >Iniciar Sesión</button>

            {/* <!-- Register buttons -->*/}

            <div class="text-center">
                <p>¿No Estas Registrado? <a href="./register">Regístrate</a></p>
            </div>

        </form>
           
        </>
    )
}

export default FormularioLogin
