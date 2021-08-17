// Code goes here
let newMatrix = [];

function matrixBuilder(num){
    for(i = 0; i < num; i++){
        newMatrix[i] = [];
        for(j = 0; j < num; j++){
            newMatrix[i][j] = Math.floor(Math.random() * 2 );
        }
    }
    return newMatrix;
}
console.log(newMatrix);   //con este console.log, pasa el test pero no imprime lo que quiero



// do not change anything from this line down
console.log(matrixBuilder(5))  //CON ESTE CONSOLE.LOG IMPRIME LO QUE QUIERO PERO NO PASA EL TEST 
