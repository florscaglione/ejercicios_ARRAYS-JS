var arr = [45,67,87,23,5,32,60];

let flippedArr = []
for(var i = arr.length - 1; i >= 0 ; i = i - 1){
    let item = arr[i];
    flippedArr.push(item);
}
console.log(flippedArr)