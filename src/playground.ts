console.log("playgroundTS");

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

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};


function merge(source, target) {
    const newobject = {...target, ...source};
    return newobject;
}
