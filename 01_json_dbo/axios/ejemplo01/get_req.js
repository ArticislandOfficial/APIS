const axios = require('axios');
const url = 'http://localhost:3000/books';

axios.get(url).then(resp => {
    console.log(resp.data);
});