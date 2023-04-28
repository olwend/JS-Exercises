// Create a map building Functions

// a) Function which builds a square Map and returns it
// example; buildMap(2) would return [['0,0', '1,0'],['0,1', '1,1']]

// Write your function here...

  // creates an array  map and fills it zeroes

  function buildMap(max) {
     var map = [];
     for (let j = 0 ; j< max ; j++) {
         map[j] = [];
         for (let k = 0 ; k < max ; k++) {
             map[j][k] = "'" + j + "," + k + "'";
         }
     }
     return map;
  }

let squareMap = buildMap(5);
console.log(squareMap);

// b) Function to build a rectangular Map and return it
function buildMap2(x, y) {
    var map = [];
    for (let j = 0; j < x; j++) {
        map[j] = [];
        for (let k = 0 ; k < y; k++) {
            map[j][k] = "'" + j + "," + k + "'";
        }
    }
    return map;
}
let nextMap = buildMap2(4,4);
console.log(nextMap);
// Write your function here...

// let recMap = buildMap(3, 7);

// console.log(recMap);

// c) Function to output built map nicely into the console

// Write your function here...

// prettyMap(squareMap);
// prettyMap(recMap);
