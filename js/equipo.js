const equipo = [
    {
        nombre: 'Luciana Barin',
        titulo: 'Licenciada en CV',
        perfil: 'Diseñadora UX/UI',
        urlImagen: 'https://media.licdn.com/dms/image/C4D03AQF_tuRtTQ49_Q/profile-displayphoto-shrink_800_800/0/1643058986352?e=1686182400&v=beta&t=23kFodOqKaZIvn9xEgSbRDqr1XgeKeILI9oURQLYKCw'
    },
    {
        nombre: 'Asbel Gonzalez',
        titulo: 'Ingeniero en Sistemas',
        perfil: 'Software Tester',
        urlImagen: 'image/asbel-pic.jpg'
    },
    {
        nombre: 'Carlos Quinteros',
        titulo: 'Ingeniero en Sistemas',
        perfil: 'Desarrollador Web Full Stack',
        urlImagen: 'image/carlos-quinteros.jpg',
    },
    {
        nombre: 'Naiara Valenzuela',
        titulo: 'Licenciada en Sistemas',
        perfil: 'Analista de Base de Datos',
        urlImagen: 'image/naiara-valenzuela1.jpg',
    }
]

$(document).ready(function () {
    $('#textoEquipo').text('Somos un grupo de consultores y programadores expertos en Java, HTML, CSS, Bootstrap, y las más modernas tecnologías listos para enfrentar los proyectos más desafiantes, garantizando la mayor calidad y el cumplimiento de los tiempos pautados.')
    
    equipo.forEach((integrante)=>{
        $('#cardsEquipo').append(
            `<article class="col-8 col-md-6 col-lg-3 card bg-light m-2 d-flex flex-column align-items-center"
                data-aos="flip-left">
                <img src=${integrante.urlImagen} class="rounded-circle object-fit-cover"
                    alt="${integrante.nombre} image" width="100px" height="100px">
                <div class="mt-3">
                    <h5 class="fw-bold text-center">${integrante.nombre}</h5>
                    <p class="text-muted text-center">${integrante.titulo}</p>
                    <p class="text-muted text-center">${integrante.perfil}</p>
                </div>
            </article>`
        )
    })
});

