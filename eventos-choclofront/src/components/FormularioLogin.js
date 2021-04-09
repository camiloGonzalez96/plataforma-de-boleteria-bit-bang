import React from 'react'

function FormularioLogin() {
    return (
        <>
        <form>

<div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Correo Electrónico</label>
</div>

{/*<!-- Password input -->*/}
<div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Contraseña</label>
</div>

{/*<!-- 2 column grid layout for inline styling -->*/}
<div class="row mb-4">
    <div class="col d-flex justify-content-center">
        

    </div>

    
</div>

{/*<!-- Submit button -->*/}
<button type="submit" class="btn btn-primary btn-block mb-4">Iniciar Sesión</button>

{/* <!-- Register buttons -->*/}
<div class="text-center">
    <p>No Estas Registrado? <a href="#!">Regístrate</a></p>
   
</div>
</form>
            
        </>
    )
}

export default FormularioLogin
