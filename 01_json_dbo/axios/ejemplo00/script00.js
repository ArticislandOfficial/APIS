console.log('Metodo axios');
const url = 'http://localhost:3000/books';
const authorization = {
    'Autorizarion': 'Beare xasdeqkwerjucfvhsdjn'
}
const createBook = (event) => {
    console.log('Function createBook');
    const newBook = {
        name: "Book 2",
        date: "01-02-2021",
        total_pages: "50"
    }
    axios.post(url, { headers: authorization }, newBook).then(resp => {
        console.log(resp.data);
    })
}
const readBooks = () => {
    axios.get(url, { headers: authorization }
    ).then(resp => {
        console.log(resp.data);
    });
}
const updateBook = () => {
    console.log('updateBook');
    const updateBook = {
        name: "Book 2",
        date: "01-02-2021",
        total_pages: "50"
    }
    axios.put(`${url}/4`, { headers: authorization }, updateBook).then(resp => {
        console.log(resp.data);
    })
}
const deleteBook = () => {
    axios.delete(`${url}/4`, { headers: authorization }).then(resp => {
        console.log(resp.data);
    })
}