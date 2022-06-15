console.log('Traer peticion');

const traerDatos = async() => {
    const country=document.getElementById('country').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=616629f9acdc3b22b8b09553e632e5da`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log(datos);
}
