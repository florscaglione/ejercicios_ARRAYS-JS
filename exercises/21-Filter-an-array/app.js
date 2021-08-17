let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
let resultingNames = allNames.filter(nombre => nombre[0] === "R");
console.log(resultingNames);


//MI PRIMERA OPCION (funciona pero no pasa test):
/*

function resultingNames(allNames, letter){
    let result = allNames.filter(name => name.includes(letter.toUpperCase()));
    
    return result;
}
console.log(resultingNames(allNames, "R"));

*/
