
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
}

obtenerEmpresas();