
// utilizamos la api de muse para obtener empresas y sus logos
const obtenerEmpresas = async () => {
    const datos = await fetch('https://www.themuse.com/api/public/companies?page=1');
    const datosJSON = await datos.json();
    const empresas = datosJSON.results.map(e => {
      //Aqui creamos objetos con lo que necesitamos, solo el nombre y el logo
      return {
        'nombre': e.name,
        'logo': e.refs.logo_image
      }
    })
    console.log(empresas)
    
    //solo resta renderizar los logos en el html
    empresas.forEach(empresa => {  
      $('#cardsClientes').append(
        `<article class="col-3 col-md-2 col-lg-2 card bg-light m-2 d-flex flex-column align-items-center"
              data-aos="zoom-in">
              <img src=${empresa.logo} class="object-fit-cover"
                  alt="${empresa.nombre} image" width="100px">
              <div class="mt-3">
                  <h6 class="fw-bold text-center">${empresa.nombre}</h6>
              </div>
          </article>`
        )
      })
}

obtenerEmpresas();