// Function Code

// a) for loop

let array = [1, 5, 8, 9, 15];
console.log("a) Before function was called: " + array);

// const f1 = (array) => {
// // go through each item of array (index 0 -> n)
// // value =+1
//   for (index in array) {
//     array[index] += 1;
//   }
// }
// Using For
const f1 = (array) => {
    for (let i = 0; i < array.length; i++) {
      array[i] += 1;
    }
}


f1(array);
console.log("After f1 was called: " + array);
console.log("\n");

// b) while

let array2 = [8, 2, 6, 20, 13];
console.log("b) Before function was called: " + array2);

// const f2 = (array) => {
//   for (index in array) {
//     array[index] -= 1;
//   }
// }
// Using while
const f2 = (array) => {
  let i = 0;
  while (i < array.length) {
    array[i] -= 1;
    console.log(i);
    i ++;
  }
}


f2(array2);
console.log("After f2 was called: " + array2);
console.log("\n");

// c) forEach

// const f3 = (array) => {
//   for (index in array) {
//     array[index] *= 2;
//   }
// }
const f3 = (array) => {
  array.forEach(item => array[array.indexOf(item)] *=2);
}

let array3 = [425, 229, 182, 42, 390];
console.log("c) Before function was called: " + array3);

f3(array3);
console.log("After f3 was called: " + array3);
