// Switch - Advanced

let number = Math.round(Math.random() * 100);
console.log("Number is: " + number);

if (number <= 25) {

  console.log("Number is smaller or equal to 25!");

} else if (25 < number && number <= 50) {

  console.log("Number is larger than 25 but smaller than or equal to 50!");

} else if (50 < number && number <= 75) {

  console.log("Number is larger than 50 but smaller than or equal to 75!");

} else {

  console.log("Number is larger than 75!");

}
