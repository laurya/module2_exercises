/*4. Read Books
Crea una función isBookRead que reciba una lista de libros y un titulo y devuelva si se
ha leído o no dicho libro.
Un libro es un objeto con title como string y isRead como booleano. En caso de no
existir el libro devolver false

Opcional
utiliza Typescript para añadir los tipos adecuados

*/

const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
];


function isBookRead(books, titleToSearch) {
    let resultado = books.find( books => books.title === titleToSearch);
    if(resultado === undefined){
        resultado = false;
    }
    else{ 
        resultado = resultado.isRead;
    }
   return resultado;
}

// TypeScript

interface booksToRead {
    title: string,
    isRead: boolean
};

const booksToReading: booksToRead []= [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true}
];

function bookIsRead(booksToRead, title){
    let result: boolean = false;
    const readed: booksToRead = booksToRead.find(booksToRead => booksToRead.title === title);

    if(readed === undefined){
        result = false;
    }
    else{result = readed.isRead;}

    return result;

}