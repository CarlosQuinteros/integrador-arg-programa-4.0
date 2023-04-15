const tamaños = [
    "Pequeña",
    "Mediana",
    "Grande",
]

const rubros = [
    "Comercio",
    "Entretenimiento",
    "Teatro",
    "Biblioteca",
    "Transporte",
    "Contaduría",
    "Musica",
]


$(document).ready(function () {
    rubros.forEach(rubro => {
        $('#rubro').append(`<option value=${rubro}>${rubro}</option>`)
    })
});

$(document).ready(function () {
    tamaños.forEach(tamaño => {
        $('#tamaños').append(`<option value=${tamaño}>${tamaño}</option>`)
    })
});

var range = document.getElementById("range");
var val= document.getElementById("value");
val.innerHTML = range.value;
range.oninput = function () {
    val.innerHTML = this.value;
}


function cotizar() {
    const costoBase = 50000;
    let total = 0;
    const cotizacion = {
        tamaño: $('#tamaños').val(),
        rubro: $('#rubro').val(),
        usuarios: $('#range').val(),
        integracion:{
            mercadoPago: $('#mercadoPago').is(":checked"),
            afip: $('#afip').is(":checked")
        }
    }
    //console.log(cotizacion);

    if(cotizacion.tamaño === ''|| cotizacion.tamaño === 'Seleccione tamaño de la empresa') {
        $('#tamaños-error').css("color", "red").text('Es necesaria esta informacion para continuar')
        $('#tamaños').addClass('is-invalid')
        return
    } else{
        $('#tamaños-error').css("color", "green").text('');
        $('#tamaños').removeClass('is-invalid').addClass('is-valid')
    }

    if(cotizacion.rubro === ''|| cotizacion.rubro === 'Seleccione rubro') {
        $('#rubro-error').css("color", "red").text('Es necesaria esta informacion para continuar')
        $('#rubro').addClass('is-invalid')
        return
    }else{
        $('#rubro-error').css("color", "green").text('');
        $('#rubro').removeClass('is-invalid').addClass('is-valid')
    }

    switch (cotizacion.tamaño) {
        case 'Pequeña':
            total = costoBase * (cotizacion.usuarios)/100;
            break;
        case 'Mediana':
            total = costoBase * (cotizacion.usuarios)/100;
            break;
        case 'Grande':
            total = costoBase * (cotizacion.usuarios)/100;

    }

    Swal.fire({
        title: `Cotización para una empresa ${cotizacion.tamaño} del rubro ${cotizacion.rubro} y aproximadamente ${cotizacion.usuarios.toLocaleString()} usuarios. TOTAL: $ ${total.toLocaleString()}`,
        icon:'success',
        text: `Integracion con Mercado Pago: ${cotizacion.integracion.mercadoPago ? 'SÍ' : 'NO' }.\nIntegracion con AFIP: ${cotizacion.integracion.afip ? 'SI' : 'NO' }`,
    })

    //reset del formulario
    $('#tamaños').removeClass('is-valid').val('Seleccione tamaño de la empresa')
    $('#rubro').removeClass('is-valid').val('Seleccione rubro')
    $('#usuarios').removeClass('is-valid').val('')
    $('#range').val(100)
    $('#value').text(100)
    $('#mercadoPago').prop("checked", false);
    $('#afip').prop('checked', false);

}
