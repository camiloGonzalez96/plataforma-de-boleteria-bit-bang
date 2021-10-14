import React,{useState} from 'react'
import { useParams } from "react-router";
import { useFetch } from '../useFetch';
import NumberFormat from 'react-number-format';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2'

const Evento = () => {
    const cookies = new Cookies();    
    const [cantidad,setCantidad]=useState(0)
    const {id}=useParams()
    const evento=useFetch('http://eventoschoclobd.herokuapp.com/api/eventos/'+id)
    const {loading,data}=evento

    function comprarEntrada(id_evento,cantidad,precio,disponible){
        let id_usuario=cookies.get('id')
        if(id_usuario){        

        if( cantidad==0){
            Swal.fire({
                icon: 'warning',
                title: 'Espera...',
                text: 'Escoge una cantidad antes de continuar con la compra'                
              })
          }else{
            if(cantidad>disponible || disponible==0){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No hay disponibilidad de entradas.'                
                  })
                  
            }else{
                Swal.fire({
                    title: 'Confirmación',
                    text: "Comprar "+ cantidad +" boletas. En $"+precio ,
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, comprar'
                  }).then(async (result) => {
                    if (result.isConfirmed) {
                        let data ={
                            usuarioId:id_usuario,
                            eventoId:id_evento,
                            cantidad_boletas:cantidad,
                            valor_boletas:precio
                        }
                        const body=data 
                        try{
                        const response=await fetch('http://eventoschoclobd.herokuapp.com/api/compras',{
                            method: "POST",
                            headers: { "Content-Type": "application/json"},
                             body: JSON.stringify(body)
                        })
                        if(response.status==200){
                            Swal.fire({
                                icon: 'success',                        
                                text: 'La compra fue realizada con exito',
                                confirmButtonText:'Ok'                        
                              }).then((result) => {
                                if (result.isConfirmed) {
                                    window.location = '/evento/'+id_evento;
                                }})
                        }else{
                            Swal.fire(
                                'Error!',
                                'Algo ha salido mal, intentalo de nuevo',
                                'error'
                              )
                        }
                    }catch(e){
                        console.log(e)
                    }    
                    }
                  })
            }

          }
        }else{
            Swal.fire(
                'Error!',
                'Debes iniciar sesión para poder comprar entradas.',
                'error'
              )

        }

        
    }
    
    return (
        <div className='pagina-evento'>
        {
         loading?   
         <div className="spinner-border text-dark " role="status">
                <span className="sr-only">Loading...</span>                            
            </div>
            :
            <>
        <div className="card m-auto my-5 d-flex justify-content-center" style={{maxWidth:'800px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={data.data.url_imagen} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div clasNames="card-body">                        
                        <h3 className="card-title text-center titulo-evento">{data.data.nombre_evento} </h3> 
                        <p className="card-text mx-5"><i className="bi bi-calendar2-check iconoE"/> <b className='negrita'> Fecha: </b>{data.data.fecha_evento}</p>
                        <p className="card-text mx-5"><i className="bi bi-clock-history iconoE"/> <b className='negrita'>Hora: </b>{data.data.hora_evento}</p>                        
                        <p className="card-text mx-5"><i className="bi bi-file-person iconoE"/><b className='negrita'>Aforo total: </b>{data.data.aforo_evento}</p>
                        <p className="card-text mx-5"><i className="bi bi-grid iconoE"/><b className='negrita'>Disponibilidad: </b>{data.data.disponibilidad}</p>
                        <p className="card-text mx-5"><i className="bi bi-cash-coin iconoE"/><b className='negrita'>Precio: </b><NumberFormat value={data.data.precio_entrada} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                        
                    </div>
                </div>
            </div>
        </div>

        <div className='container text-center mb-5'>
        <table class="table">
            <thead class="table-dark">
                <tr>                        
                    <th scope="col" >Categoria</th>
                    <th scope="col" >Cantidad</th>
                    <th scope="col" >Precio unitario</th>
                    <th scope="col" >Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>General</td>
                    <td><select class="form-select" aria-label="Default select example" onChange={e=>{setCantidad(e.target.value)}}>
                            <option selected value="0" >0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="3">4</option>
                            <option value="3">5</option>
                        </select>
                    </td>
                    <td><NumberFormat value={data.data.precio_entrada} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                    <td><NumberFormat value={cantidad*data.data.precio_entrada} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                </tr>
            </tbody>
        </table>
        <p className='total'> Total: <NumberFormat value={cantidad*data.data.precio_entrada} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </p>
        <button type='button' className='btn btn-warning' onClick={fn=>{comprarEntrada(data.data.id,cantidad,cantidad*data.data.precio_entrada,data.data.disponibilidad)}}>Comprar Entradas</button>
        </div>
        </>
        }
        
            
        </div>
    )
}

export default Evento


