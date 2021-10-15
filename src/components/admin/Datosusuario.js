import React,{useState} from 'react'
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';

const Datosusuario = () => {
    const cookies = new Cookies();

    const [editar,setEditar]=useState('Editar datos')
    const [habilitar,setHabilitar]=useState(true)
    const [nombre,setNombre]=useState(cookies.get('nombre')) 
    const [apellido,setApellido]=useState(cookies.get('apellido')) 
    const [celular,setCelular]=useState(cookies.get('celular')) 
    const [correo,setCorreo]=useState(cookies.get('correo')) 

    async function editarDatos(e){
        e.preventDefault();
        if(editar==='Editar datos'){ 
            setHabilitar(false)
            setEditar('Guardar')
        }else{
            const data={
                nombre_usuario:nombre,
                apellido_usuario:apellido,
                celular_usuario:celular,
                correo_usuario:correo
            }
            try {
                const body =data
                const response=await fetch("https://eventoschoclobd.herokuapp.com/api/usuarios/"+cookies.get('id'),{
                    method: "PUT",
                    headers: { "Content-Type": "application/json"
                                 },
                    body: JSON.stringify(body)
                })
                if(response.status==200){                    
                    Swal.fire({
                        icon: 'success',                        
                        text: 'El usuario fue actualizado con exito'                        
                      })
                      
                    traerDatosNuevos()                 
                    setHabilitar(true)
                    setEditar('Editar datos') 

                }
            } catch (error) {
                console.log(error)
            }
        }

    }

    async function traerDatosNuevos(){        
        try {            
            const response=await fetch("https://eventoschoclobd.herokuapp.com/api/usuarios/"+cookies.get('id'),{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"},
                })  
            if(response.status==200){
                response.json().then(res=>{                                       
                    setNombre(res.data.nombre_usuario)
                    setApellido(res.data.apellido_usuario)
                    setCelular(res.data.celular_usuario)
                    setCorreo(res.data.correo_usuario) 
                })               

            }
        } catch (error) {
            console.log(error)
        }

    }

    function cancelar(e){
        e.preventDefault(); 
        traerDatosNuevos()      
        setHabilitar(true)
        setEditar('Editar datos')
    }

    return (
        <div>
             <div class="card w-75 m-auto">
                <div class="card-body">
                    <h5 class="card-title titulo-evento">Datos del usuario</h5>
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor="inputNombre" class="form-label">Nombre:</label>
                            <input type="text" class="form-control" id="inputNombre" value={nombre}  disabled={habilitar}
                            onChange={e=>setNombre(e.target.value)}/>
                        </div>
                        <div className='col'>
                            <label htmlFor="inputApellido" class="form-label">Apellido:</label>
                            <input type="text" class="form-control" id="inputApellido" value={apellido} disabled={habilitar}
                             onChange={e=>setApellido(e.target.value)}/>                            
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor="inputEmail" class="form-label">Correo:</label>
                            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" value={correo}  disabled={habilitar}
                            onChange={e=>setCorreo(e.target.value)}/>
                        </div>
                        <div className='col'>
                            <label htmlFor="inputCelular" class="form-label">Celular:</label>
                            <input type="number" class="form-control" id="inputCelular" value={celular} disabled={habilitar}
                            onChange={e=>setCelular(e.target.value)}/>                            
                        </div>
                    </div>
                    <button href="#" class="btn btn-warning mt-5" onClick={editarDatos}>{editar}</button>
                    <button href="#" class="btn btn-warning mt-5 mx-2" disabled={habilitar} onClick={cancelar}>Cancelar</button>
                </div>
            </div>
            
        </div>
    )
}

export default Datosusuario
