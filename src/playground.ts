console.log("playgroundTS");

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