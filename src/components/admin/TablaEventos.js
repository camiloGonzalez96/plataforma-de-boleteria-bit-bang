import React from 'react'
import {useFetch} from '../useFetch'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'

const TablaEventos = () => {
    const cookies = new Cookies();
    const eventos=useFetch('https://eventoschoclobd.herokuapp.com/api/eventos')
    const {loading,data}=eventos

    function editar(e){  
        cookies.set('evento',e,{ path: '/' })      
        window.location='/editar-evento/'+e.id
    }


    const confirmar = (id,evento)=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Estas seguro?',
            text: "Se eliminara el evento: "+evento,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              eliminar(id)
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado'                
              )
            }
          })  
    }
    async function eliminar ( id){
        try {            
            const response=await fetch('https://eventoschoclobd.herokuapp.com/api/eventos/'+id,{
                method: "DELETE",
                headers: { "Content-Type": "application/json"},
                                            
            })
            if(response.status==200){
                Swal.fire({
                    icon: 'success',                        
                    text: 'El evento fue eliminado',
                    confirmButtonText:'Ok'                        
                  }).then((result) => {
                    if (result.isConfirmed) {
                        window.location = '/user';
                    }})
            }
        } catch (error) {
            console.log(error)
        }
        
    }
    
    return (
        <div className='mt-5'>
            <h3 className='text-decoration-underline mx-3'>Eventos</h3>
            <br/>
            <button type='button' className='btn btn-success mb-3'onClick={e=>{window.location='/crear-evento'}}>Crear evento <i className='bi bi-plus-square' style={{fontSize:'20px'}} /> </button>
            <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Editar/Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             loading
                             ?
                             <div className="spinner-border text-dark" role="status">
                                 <span className="sr-only">Loading...</span>
                                 {console.log('cargando')}
                             </div>
                             :                             
                             data.data.map(e=>(
                                 <tr key={e.id}>
                                     <th scope="row">{e.id}</th>
                                    <td><img src={e.url_imagen} className='img-product' width='50'/></td>
                                    <td>{e.nombre_evento}</td> 
                                    <td>                                        
                                        <button className='btn btn-primary mx-3' onClick={fn=>{editar(e)}}>
                                            <i className='bi bi-pencil' style={{fontSize:'12px'}} />
                                        </button>

                                        <button className='btn btn-danger' onClick={fn=>{confirmar(e.id,e.nombre_evento)}}>
                                            <i className='bi bi-trash' style={{fontSize:'12px'}}/>
                                        </button>
                                        
                                        </td>                                    
                                </tr>                                                       
                            )) 
                        }
                    
                    </tbody>
                </table>

            
        </div>
    )
}

export default TablaEventos
