// What's so special about finally?
// it will output once run completed, error is only caught in try-catch
const counter =0;
try {
  console.log("Counter number is: " + counter);
  counter++;
  // throw new Error ("New error")
} catch (error2) {
    console.log(error);
    console.log (error2.message);
    // error above so finally still executes but items beyond do not
} finally {
  // console.log (error2);
  console.log ("this is a finally error");

}
  console.log ("this is an isolated console statement");

  // in the event of error in catch block the code
