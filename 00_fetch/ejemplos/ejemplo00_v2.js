console.log('Metodo fetch promise');
let url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json';
const peticion = fetch(url)
.then(response => response.json()
.then(data => console.log(data)))
peticion;