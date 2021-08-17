let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let newArray = theBools.map(function(bool){
    if(bool === 0){
        return "woko";
    }else if (bool === 1){
        return "wiki";
    }
});

console.log(newArray);
