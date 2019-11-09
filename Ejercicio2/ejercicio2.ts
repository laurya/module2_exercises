/*Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
devuelva la concatenación de ambos. Uঞliza rest / spread operators.
*/
const sportsType = ["Football","Basketball","Tennis","Hockey","Voley","Running","Motorbike"];

const athletes = ["Leo Messi","Gasol","Fedrer","Gustafsson","Zaytsev","Van der Sar","Rossi"];

const concat = (param1, param2) => {
    const playerSports = [...param1,...param2];
    return playerSports;
}; 

const concat2 = (param1, param2) => {
    const playerSports2 = [param1.concat(param2)];
    return playerSports2;
}; 

/*
Opcional
Implementa una versión del ejercicio anterior donde se acepten múlঞples arrays de
entrada (más de 2).*/

const concatOptional = (...args) => {
    const paramArrays = [...args];
    let sportsNewArray = [];
    if(paramArrays.length > 1){
        for(let i=0; i<paramArrays.length; i++){
            sportsNewArray = sportsNewArray.concat(paramArrays[i]);
        }
    }
    else{
        sportsNewArray = [...args];
    }
    
    return sportsNewArray;
}; 