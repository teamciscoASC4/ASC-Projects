// // //no parameter for the config 
// // var prompt = require('prompt-sync')();
// // // 
// // // get input from the user. 
// // // 
// // var current_money = 1000;
// // var user_items = [];

// // // Sword costs $500
// // // Food costs $100

// // while(current_money >= 100){
// //     console.log("You currently have " + current_money + ". Sword = $500, Food = $100.");
// //     var choice = prompt("Do you want a sword, or do you want food?");
// //     if(choice == "sword"){
// //         if(current_money >= 500){
// //             current_money = current_money - 500;
// //             user_items.push("sword");
// //         }else{
// //             console.log("Sorry broke boy.");
// //         }
// //     }else if(choice == "food"){
// //         current_money = current_money - 100;
// //         user_items.push("food");
// //     }else{
// //         console.log("We don't have that in stock.");
// //     }
// // }

// // console.log("Watch out for the frost troll! Best of luck on your adventure!");
// // var seeInventory = prompt("Do you want to see your inventory? (y/n)");

// // if(seeInventory == "y"){
// //     console.log("Your inventory is: " + user_items);
// // }else{
// //     console.log("Have a nice day! Hope you don't take an arrow to the knee.");
// // }



// var pokemon1 = ['Charmander', 60, 30, 20];
// var pokemon2 = ['Bulbasaur', 100, 40, 10];
// var pokemon3 = ['Squirtle', 80, 50, 25];

// var pokemons = [pokemon1, pokemon2, pokemon3];

// console.log(pokemons[0][0]);
// console.log(pokemons[1][0]);
// console.log(pokemons[1][3]);

var array1 = ["a", "b", "c", "d"];
var array2 = [["a", "b"],
              ["c", "d"],
              ["e", "f"]];

for(var i = 0; i < array2.length; i++){
    for (var j = 0; j < array2[i].length; j++){
        console.log(array2[i][j]);
    }
}