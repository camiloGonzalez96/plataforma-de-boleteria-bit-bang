import React from 'react'

function FormularioRegister() {
    return (
        <>

        
        <form>

        <div class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Nombre Completo</label>
                <input type="text" id="form2Example1" class="form-control" placeholder="Ingesa tu nombre completo..."/>
                
            </div>

            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Telefono</label>
                <input type="text" id="form2Example1" class="form-control" placeholder="Ingesa tu numero celular..."/>
                
            </div>


            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Correo Electrónico</label>
                <input type="email" id="form2Example1" class="form-control" placeholder="Ingesa tu correo electrónico..."/>
                
            </div>

            {/*<!-- Password input -->*/}

            <div class="form-outline mb-4">
                 <label class="form-label" for="form2Example2">Contraseña</label>
                <input type="password" id="form2Example2" class="form-control" placeholder="Ingesa tu contraseña..." />
                
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
