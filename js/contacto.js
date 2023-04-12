const paises = [
    'Argentina',
    'Brasil',
    'Chile',
    'Colombia',
    'Cuba',
    'Ecuador',
    'Guatemala',
    'onduras',
    'México',
    'Nicaragua',
    'Panamá',
    'Paraguay',
    'República',
    'Uruguay',
    'Venezuela'
]

$(document).ready(function () {
    paises.forEach(pais => {
        $('#pais').append(`<option value=${pais}>${pais}</option>`)
    })
});

function enviarFormulario(){

    const formulario = {
        nombre: $('#nombreInput').val(),
        apellido: $('#apellidoInput').val(),
        email: $('#emailInput').val(),
        pais : $('#pais').val(),
        mensaje: $('#mensajeInput').val(),
        sucripto : $('#idSwitchRegistrarme').val()
    }

    if(formulario.nombre === ''){
        $('#nombre-error').css("color", "red").text('Debes completar este campo')
        $('#nombreInput').addClass('is-invalid')
        return
    } else{
        $('#nombre-error').css("color", "green").text('');
        $('#nombreInput').removeClass('is-invalid').addClass('is-valid')
    }

    if(formulario.apellido === ''){
        $('#apellido-error').css("color", "red").text('Debes completar este campo')
        $('#apellidoInput').addClass('is-invalid')
        return
    }else{
        $('#apellido-error').css("color", "green").text('');
        $('#apellidoInput').removeClass('is-invalid').addClass('is-valid')
    }

    if(formulario.email === ''){
        $('#email-error').css("color", "red").text('Debes completar este campo')
        $('#emailInput').addClass('is-invalid')
        return
    }else{
        $('#email-error').css("color", "green").text('')
        $('#emailInput').removeClass('is-invalid').addClass('is-valid')
    }

    if(formulario.pais === '' || formulario.pais === 'Seleccione un país'){
        $('#pais-error').css("color", "red").text('Debes completar este campo')
        $('#pais').addClass('is-invalid')
        return
    }else{
        $('#pais-error').css("color", "green").text('')
        $('#pais').removeClass('is-invalid').addClass('is-valid')
    }

    if(formulario.mensaje === ''){
        $('#mensaje-error').css("color","red").text('Debes completar este campo')
        $('#mensajeInput').addClass('is-invalid')
        return
    }else{
        $('#mensaje-error').css("color", "green").text('')
        $('#mensajeInput').removeClass('is-invalid').addClass('is-valid')
    }
    //console.log(formulario);
    Swal.fire({
        title: `Gracias ${formulario.apellido} ${formulario.nombre}! Recibimos tu mensaje!`,
        icon:'success',
        text: `Mensaje Recibido: ${formulario.mensaje}. Te contactaremos a la direccion de correo ${formulario.email}`
    })

    //reset del formulario
    $('#mensajeInput').removeClass('is-valid').val('')
    $('#nombreInput').removeClass('is-valid').val('')
    $('#apellidoInput').removeClass('is-valid').val('')
    $('#emailInput').removeClass('is-valid').val('')
    $('#pais').removeClass('is-valid').val('Seleccione un páis')

}