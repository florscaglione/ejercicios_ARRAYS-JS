var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
var newArray = [];

for(var i = 0; i<= mix.length; i++){
    let item = mix[i];
    newArray.push(typeof item)
}    

console.log(newArray);