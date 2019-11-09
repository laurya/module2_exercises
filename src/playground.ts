console.log("playground1");
/*
Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
y devuelva su primer elemento. Utiliza destructuring.
*/

const sports = ["Football","Basketball","Tennis","Hockey"];

const head = (sports) => {
    const [firstSport] = sports;
    return firstSport;
};

/*
Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada
devuelta todos menos el primer elemento. Uঞliza rest operator.
*/

const tail = (/* array */) => {}; // Implementation here.