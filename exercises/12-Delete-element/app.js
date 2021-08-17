var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName){
    //your code here
  
    let newArray = [];
    for(let i in people){
        let persona = people[i];
        if(persona !== personName){
            newArray.push(persona)
        }
    }
return newArray;
}


console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
