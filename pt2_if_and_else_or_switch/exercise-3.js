// Switch - Advanced

let number = Math.round(Math.random() * 100);
console.log("Number is: " + number);

switch(true) {
  case number <= 25:
    console.log("Number is smaller or equal to 25!");
    break;
  case number > 25 && number <= 50:
  console.log("Number is larger than 25 but smaller than or equal to 50!");
    break;
  case number > 50 && number <=75:
  console.log("Number is larger than 50 but smaller than or equal to 75!");
    break;
  default:
  console.log("Number is larger than 75!");

}



// if (number <= 25) {
//
//   console.log("Number is smaller or equal to 25!");
//
// } else if (25 < number && number <= 50) {
//
//   console.log("Number is larger than 25 but smaller than or equal to 50!");
//
// } else if (50 < number && number <= 75) {
//
//   console.log("Number is larger than 50 but smaller than or equal to 75!");
//
// } else {
//
//   console.log("Number is larger than 75!");
//
// }
