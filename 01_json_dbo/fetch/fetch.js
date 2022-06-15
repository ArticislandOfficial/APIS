console.log('Metodo fetch await');
let url = 'http://localhost:3000/books';

const createBook = () => {
    console.log('Function createBook');
    const newBook = {
        name: "Book 2",
        date: "01-02-2021",
        total_pages: "50"
    }
    const books = async () => {
        const resp = await fetch(
            url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(newBook)
        });
        const books = await resp.json();
        console.log(books);
    }
    books();
}
const readBooks = () => {
    console.log('Function readBooks');
    const books = async () => {
        const resp = await fetch(
            url, {
            method: 'GET'
        });
        const books = await resp.json();
        console.log(books);
    }
    books();
}
const updateBook = () => {
    console.log('updateBook');
    const newBook = {
        name: "Book 2",
        date: "01-02-2021",
        total_pages: "50"
    }
    const books = async () => {
        const resp = await fetch(
            `${url}/4` 
            , {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(newBook)
        });
        const books = await resp.json();
        console.log(books);
    }
    books();
}
const deleteBook = () => {
    console.log('deleteBook');
    const books = async () => {
        const resp = await fetch(
            `${url}/4` 
            , {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
        });
        const books = await resp.json();
        console.log(books);
    }
    books();
}