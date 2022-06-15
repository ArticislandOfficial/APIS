console.log('Metodo fetch promise');
// Metodo get = url
let url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json';
const peticion = fetch(url)
    .then(response => {
        console.log(response);
        response.json().then(
            data => {
                const {mxn, date} = data
                document.getElementById('mensaje').innerHTML = 
                ` El valor es ${mxn}  el dia ${date} `
            }
        )
    }
)
peticion;