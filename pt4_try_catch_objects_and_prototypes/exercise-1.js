// Try and Catch

// a)

const f1 = () => {

  const counter = 0;
  try {
  while (counter < 10) {

    console.log("Counter number is: " + counter);
    counter++;
    }
  } catch (err) {
    console.log (err.message);
    // break;
  } finally {
    console.log("Download attempt completed.")
  }
}



// Uncomment the line below to test
f1();

// b)

const f2 = () => {
  try{ f1();
    throw new Error("What a dangerous function!");
  } catch (error){
    console.log(error.message);
  }
}
f2();

 // Diego's example
