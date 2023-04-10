const paises = [
    'Brasil',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Ecuador',
    'El Salvad',
    'Guatemala',
    'onduras',
    'México',
    'Nicaragua',
    'Panamá',
    'Paraguay',
    'Perú',
    'Puerto Rico',
    'República',
    'Uruguay',
    'Venezuela'
]

$(document).ready(function () {
    paises.forEach(pais => {
        $('#pais').append(`<option value=${pais}>${pais}</option>`)
    })
    
});