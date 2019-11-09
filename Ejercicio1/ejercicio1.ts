
const sports = ["Football","Basketball","Tennis","Hockey","Voley","Running","Motorbike"];

/*Head*/
const head = (sports) => {
    const [firstSport] = sports;
    return firstSport;
};


/*Tail*/
const tail = (sports) => {
    const [, ...newSports] = sports;
    return newSports;
}; 


/*Init*/
const init = (sports) => {
    const duplicateSports = sports.slice(1, sports.length -1);
    return duplicateSports;
};


/*Last */
const last = (sports) => {
    const lessLastSport = sports.pop();
    return lessLastSport;
}; 
