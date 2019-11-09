console.log("playgroundTS");
/*
Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
y devuelva su primer elemento. Utiliza destructuring.
*/

const sports = ["Football","Basketball","Tennis","Hockey","Voleyball","Running","Motorbike"];

const head = (sports) => {
    const [firstSport] = sports;
    return firstSport;
};


/*
Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada
devuelta todos menos el primer elemento. Utiliza rest operator.
*/

const tail = (sports) => {
    const [, ...newSports] = sports;
    return newSports;
}; 


/*
Init
Implementa una función init (inmutable), tal que, dado un array como entrada
devuelva todos los elementos menos el ultimo. utiliza los métodos que ofrece
Array.prototype.
*/

const init = (sports) => {
    const duplicateSports = sports.slice(1, sports.length -1);
    return duplicateSports;
};


/*
Last
Implementa una función last (inmutable), tal que, dado un array como entrada
devuelva el ultimo elemento.
*/
const last = (sports) => {
    const lessLastSport = sports.pop();
    return lessLastSport;
}; 