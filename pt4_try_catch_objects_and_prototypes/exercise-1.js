// Try and Catch

// a)

const f1 = () => {
  const counter = 0;
  while (counter < 10) {
    console.log("Counter number is: " + counter);
    counter++;
  }
}

// Uncomment the line below to test
// f();

// b)

const f2 = () => {
  throw new Error("What a dangerous function!");
}
