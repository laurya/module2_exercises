
const sports = ["Football","Basketball","Tennis","Hockey","Voley","Running","Motorbike"];

/*Head*/
const head = (param1) => {
    const [firstSport] = param1;
    return firstSport;
};


/*Tail*/
const tail = (param1) => {
    const [, ...newSports] = param1;
    return newSports;
}; 


/*Init*/
const init = (param1) => {
    const duplicateSports = param1.slice(1, param1.length -1);
    return duplicateSports;
};


/*Last */
const last = (param1) => {
    const lessLastSport = param1.pop();
    return lessLastSport;
}; 
