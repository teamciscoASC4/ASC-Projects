/*
Problem 1:
  Create an array of size 10, place a random int in each index.
  Write a function that will find the sum of the array values.

Problem 2:
  Define an object "Car" and give it 3 properties and
  2 functions (return name, change color).
*/

//JSON Notation
var car = {
    color: "red",
    name: "Mustang",
    year: "2000",
    getName: function(){
        return car.name;
    },
    getColor: function(){
        return car.color;
    }
};

//Object/Class Definition
function Car(color, name, model){
    this.color = color;
    this.name = name;
    this.model = model;
    this.getName = function(){
        return this.name;
    };
    this.changeColor = function(newColor){
        this.color = newColor;
        return this.color;
    };
}

var lambo = new Car("Fire Orange", "Lambourghini Murcadsadad", "2001");
lambo.changeColor("Hot Pink");




var myArray = [];

for (var i = 0; i < 10; i++){
    var num = Math.floor(Math.random()*100);
    myArray.push(num);
    //myArray[i] = Math.floor(Math.random()*10);
}

function findSum(myArray){
    var a = 0;
    for (var i = 0; i < 10; i++){
        a = a + myArray[i];
    }
    return a;
}

var sum = findSum(myArray);