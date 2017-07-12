function addLastName(){
    var myName = "jonathan";
    return myName + " " + "mevs";
}

function fullName(){
    var myName = "jonathan";
    return myName + " " + "reed" + " " + "mevs";
}

console.log(addLastName());
console.log(fullName());


var classRoster = ["Nick", "Noor", "Joel", "Ellis"];
var staffRoster = ["Jasmine", "Oscar", "Navid", "Jon"];
var ciscoRoster = ["Millie", "Lou", "Larry", "Josh", "Gerard"];

function printRoster(array){
    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

printRoster(classRoster);
printRoster(staffRoster);
printRoster(ciscoRoster);