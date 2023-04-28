// Question a)

let d = 15;

let circ = undefined;
let area = undefined;

circ = (d * Math.PI).toFixed(2);
// circ = circ.toFixed(2)

area = (((d/2)** 2) * Math.PI).toFixed(2);
// area = area.toFixed(2);

console.log("Circumference of circle is " + circ);
console.log("Area of circle is " + area);

// Question b)

let a = undefined;
let b = 5;
let c = 8;

// a2 + b2 = c2
// a2 = c2 - b2
 let asq = ((c ** 2) - (b ** 2))

 // a = ((Math.sqrt(asq))).toFixed(2);
 a = ((Math.sqrt((c ** 2) - (b ** 2)))).toFixed(2);

console.log("Length of unknown side is " + a);
