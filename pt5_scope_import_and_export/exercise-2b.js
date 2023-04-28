// File to run

// Add importing code here...
var functions = require('./exercise-2a');
// Tests
try {
  f2(f1);
  console.log("It worked!");
} catch (e) {
  console.log("Hmm... something is wrong. Functions were not properly imported");
}
