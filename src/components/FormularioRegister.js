import React,{useState} from 'react'

function FormularioRegister() {
    //Estados
    const [nombre,setNombre]=useState('')
    const [apellido,setApellido]=useState('')
    const [celular,setCelular]=useState('')
    const [correo,setCorreo]=useState('')
    const [contraseña,setContraseña]=useState('')

    const data={
        nombre_usuario:nombre,
        apellido_usuario:apellido,
        celular_usuario:celular,
        correo_usuario:correo,
        rol_usuario:'Cli',
        contraseña_usuario:contraseña
    }

    const submit = async e =>{
        e.preventDefault();       
        try {
            const body =data
            const response=await fetch("https://eventoschoclobd.herokuapp.com/api/auth/singup",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            if(response.status==200){
                alert(`El usuario ${nombre}, ha sido creado exitosamente.`)
                setNombre('')
                setApellido('')
                setCelular('')
                setCorreo('')
                setContraseña('')                
                window.location = '/login';
            }
        } catch (error) {
            console.log(error)
        }    

    }

    
    return (
        <>

        
        <form  onSubmit={submit}> 

        <div class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Nombre </label>
                <input type="text" id="form2Example1" class="form-control" placeholder="Ingesa tu nombre completo..." value={nombre} 
                                    onChange={e=>setNombre(e.target.value)}/>
                
            </div>

            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Apellido</label>
                <input type="text" id="form2Example1" class="form-control" placeholder="Ingesa tu nombre completo..." value={apellido}
                                    onChange={e=>setApellido(e.target.value)}/>
                
            </div>

            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Telefono</label>
                <input type="text" id="form2Example1" class="form-control" placeholder="Ingesa tu numero celular..." value={celular}
                                        onChange={e=>setCelular(e.target.value)}/>
                
            </div>


            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Correo Electrónico</label>
                <input type="email" id="form2Example1" class="form-control" placeholder="Ingesa tu correo electrónico..." value={correo}
                                        onChange={e=>setCorreo(e.target.value)} />
                
            </div>

            {/*<!-- Password input -->*/}

            <div class="form-outline mb-4">
                 <label class="form-label" for="form2Example2">Contraseña</label>
                <input type="password" id="form2Example2" class="form-control" placeholder="Ingesa tu contraseña..." value={contraseña}
                                            onChange={e=>setContraseña(e.target.value)}  />
                
            </div>

            {/*<!-- Submit button -->*/}

            <button type="submit" class="btn btn-outline-primary btn-block mb-4" >Registrarse</button>

            {/* <!-- Register buttons -->*/}

            <div class="text-center">
                <p>¿Ya estas registrado? <a href="./Login">Inicia Sesion</a></p>
            </div>

        </form>
           
        </>
    )
}

export default FormularioRegister
