// Functions to be imported

// Make the necessary changes to export the functions

f1 = () => {
  console.log("This function was imported");
}

f2 = (func) => {
  for (let i = 0; i < 2; i++) {
    func();
  }
}
