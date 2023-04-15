var range = document.getElementById("range");
var val= document.getElementById("value");
val.innerHTML = range.value;
range.oninput = function () {
    val.innerHTML = this.value;
}


function cotizar() {

    const cotizacion = {
        tamaño: $('#tamaños').val(),
        rubro: $('#rubro').val(),
        servicio: $('#servicio').val(),
        usuarios: $('#value').val(),
       integracion: $('#checkselected').val(),
        
    }

    if(presupuesto.tamaños === ''|| presupuesto.tamaños === 'Seleccione tamaño de la empresa') {
        $('#tamaños-error').css("color", "red").text('Es necesaria esta informacion para continuar')
        $('#tamaños').addClass('is-invalid')
        return
    } else{
        $('#tamaños-error').css("color", "green").text('');
        $('#tamaños').removeClass('is-invalid').addClass('is-valid')
    }

    if(presupuesto.rubro === ''|| presupuesto.rubro === 'Seleccione rubro') {
        $('#rubro-error').css("color", "red").text('Es necesaria esta informacion para continuar')
        $('#rubro').addClass('is-invalid')
        return
    }else{
        $('#rubro-error').css("color", "green").text('');
        $('#rubro').removeClass('is-invalid').addClass('is-valid')
    }

    if(presupuesto.servicio === ''|| presupuesto.servicio === 'Seleccione servicio a solicitar') {
        $('#servicio-error').css("color", "red").text('Es necesaria esta informacion para continuar')
        $('#servicio').addClass('is-invalid')
        return
    }else{
        $('#servicio-error').css("color", "green").text('')
        $('#servicio').removeClass('is-invalid').addClass('is-valid')
    }

    if(presupuesto.checkselected === ''){
        $('#check-error').css("color","red").text('Debes completar este campo')
        $('#checkselected').addClass('is-invalid')
        return
    }else{
        $('#check-error').css("color", "green").text('')
        $('#checkselected').removeClass('is-invalid').addClass('is-valid')
    }
    //console.log(formulario);
    Swal.fire({
        title: `Gracias Recibimos tu mensaje!`,
        icon:'success',
        text: `Mensaje Recibido: . Te contactaremos a la direccion de correo `
    })

    //reset del formulario
    $('#tamaños').removeClass('is-valid').val('Seleccione tamaño de la empresa')
    $('#rubro').removeClass('is-valid').val('Seleccione rubro')
    $('#servicio').removeClass('is-valid').val('Seleccione servicio a solicitar')
    $('#usuarios').removeClass('is-valid').val('')
    $('#integracion').removeClass('is-valid').val('')

}
