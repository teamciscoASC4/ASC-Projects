var array1 = ["a", "b", "c", "d"];
var array2 = [["a", "b"],
              ["c", "d"],
              ["e", "f"]];

for(var i = 0; i < array2.length; i++){
    for (var j = 0; j < array2[i].length; j++){
        console.log(array2[i][j]);
    }
}