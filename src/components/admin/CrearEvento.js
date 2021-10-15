import React,{useState} from 'react'
import Swal from 'sweetalert2'

const CrearEvento = () => {
    const [nombre,setNombre]=useState('')
    const [fecha,setFecha]=useState('')
    const [hora,setHora]=useState('')
    const [url,setUrl]=useState('')
    const [disponible,setDisponible]=useState('')
    const [aforo,setAforo]=useState('')
    const [precio,setPrecio]=useState('')

    async function crear(){
        const data={
            nombre_evento:nombre,
            fecha_evento:fecha,
            hora_evento:hora,
            url_imagen:url,
            disponibilidad:disponible,
            aforo_evento:aforo,
            precio_entrada:precio
        }
        try {
            const body =data
            const response=await fetch('https://eventoschoclobd.herokuapp.com/api/eventos',{
                method: "POST",
                headers: { "Content-Type": "application/json"},
                        
                body: JSON.stringify(body)
            })
            if(response.status==200){
                Swal.fire({
                    icon: 'success',                        
                    text: 'El evento fue creado con exito',
                    confirmButtonText:'Ok'                        
                  }).then((result) => {
                    if (result.isConfirmed) {
                        window.location = '/user';
                    }})
                
            }
            
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
             <div class="card w-75 m-auto">
                <div class="card-body">
                    <h5 class="card-title titulo-evento">Crear Evento</h5>
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor="inputNombre" class="form-label">Nombre evento:</label>
                            <input type="text" class="form-control" id="inputNombre" value={nombre}  
                            onChange={e=>setNombre(e.target.value)}/>
                        </div>
                        <div className='col'>
                            <label htmlFor="inputFecha" class="form-label">Fecha:</label>
                            <input type="date" class="form-control" id="inputFecha" value={fecha} 
                             onChange={e=>setFecha(e.target.value)}/>                            
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor="inputHora" class="form-label">Hora:</label>
                            <input type="time" class="form-control" id="inputHora"  value={hora}  
                            onChange={e=>setHora(e.target.value)}/>
                        </div>
                        <div className='col'>
                            <label htmlFor="inputUrl" class="form-label">Url de la imagen:</label>
                            <input type="text" class="form-control" id="inputUrl" value={url} 
                            onChange={e=>setUrl(e.target.value)}/>                            
                        </div>
                        </div>
                        <div className='row'>
                        <div className='col'>
                            <label htmlFor="inputDis" class="form-label">Disponibilidad</label>
                            <input type="number" class="form-control" id="inputDIs"  value={disponible}  
                            onChange={e=>setDisponible(e.target.value)}/>
                        </div>
                        <div className='col'>
                            <label htmlFor="inputAforo" class="form-label">Aforo</label>
                            <input type="number" class="form-control" id="inputAforo" value={aforo} 
                            onChange={e=>setAforo(e.target.value)}/>                            
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor="inputPrecio" class="form-label">Precio</label>
                            <input type="number" class="form-control" id="inputPrecio"  value={precio}  
                            onChange={e=>setPrecio(e.target.value)}/>
                        </div>                        
                    </div>
                    <button type='button' class="btn btn-success mt-5" onClick={crear} >Crear</button>
                   
                </div>
            </div>
            
        </div>
    )
}

export default CrearEvento
