console.log('Metodo fetch await');
let url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json';
const peticion = async() => {
    // El método fetch() brinda una forma fácil y 
    // lógica de obtener recursos de forma asíncrona en toda la red.
    const respuesta = await fetch(url);
    console.log(respuesta);
    // const datos = await respuesta.json();
    const datos = await respuesta.json();

    console.log(datos);
    return datos;
}
peticion();