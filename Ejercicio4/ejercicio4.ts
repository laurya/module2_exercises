
/*4. Read Books
Crea una función isBookRead que reciba una lista de libros y un titulo y devuelva si se
ha leído o no dicho libro.
Un libro es un objeto con title como string y isRead como booleano. En caso de no
existir el libro devolver false
TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
function isBookRead(books, titleToSearch) {
// Implementation here
}

Ejemplo
const books = [
{title: "Harry Potter y la piedra filosofal", isRead: true},
{title: "Canción de hielo y fuego", isRead: false},
{title: "Devastación", isRead: true},
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

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