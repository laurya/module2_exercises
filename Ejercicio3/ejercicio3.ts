/*
Clone
Implementa una función clone que, a partir de un objeto de entrada source devuelva
un nuevo objeto con las propiedades de source :
*/

const lauryExercise3 = {
    name: "Pepe", 
    surname: "Garcia", 
    car: "Mercedes", 
    phone: "iPhone", 
    age: 43
};


function clone(source) {
    let objectClonedNew = source;
    return objectClonedNew;
} 

/*
Merge
Implementa una función merge que, dados dos objetos de entrada source y target ,
devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
de propiedades con el mismo nombre, source sobreescribe a target .
*/

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};


function merge(source, target) {
    const newobject = {...target, ...source};
    return newobject;
}
