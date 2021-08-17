
var myNumbers = [23,234,345,4356234,243,43,56,2];

// your code here
function myFunction (number){
    return number * 3;
}

var newArray = myNumbers.map(myFunction);


console.log(newArray);



//Pista: La función tomará un parámetro con el elemento original que se transforma y agrega en el nuevo arreglo. 
//Recuerda que tu función debe devolver cada uno de los nuevos elementos que se almacenarán en el nuevo arreglo.