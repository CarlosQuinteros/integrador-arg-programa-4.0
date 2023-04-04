const serviciosDesarrollos = [
    'Gestión de requerimientos', 
    'Diseño detallado de software',
    'Diseño de UI',
    'Codificación',
    'Gestión de cambios',
    'Testing unitario e integral',
    'Documentación técnica y funcional',
    'Soporte técnico',
    'Mantenimiento evolutivo'
]


const serviciosDeMetodologia = [
    'Planificación, monitoreo y control de proyectos',
    'Desarrollos a medida',
    'Backlog de trabajo',
    'Gestión de cambios',
    'Control de calidad y testing',
    'Soporte y mantenimiento evolutivo'
]

$(document).ready(function(){
    serviciosDesarrollos.forEach( item => {
        $('#listaServiciosDesarrollo')
            .append(`<li class="mb-2">${item}</li>`)
    })

    serviciosDeMetodologia.forEach( item => {
        $('#listaServiciosMetodologia')
            .append(`<li class="mb-2">${item}</li>`)
    })
})