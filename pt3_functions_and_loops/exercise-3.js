// Shuffle the array

let array = []
for (let i = 1; i <= 25; i++) {
  array.push(i);
}
console.log("Standard array: " + array);

const shuffle = (arr) => {
  let tempStore;
  for (let i = arr.length - 1; i > 0; i--) {
    indexA = Math.floor(Math.random() * (i + 1));
    tempStore = arr[i];
    arr[i] = arr[indexA];
    arr[indexA] = tempStore;
  }
  return arr
}

// Your function...

let shuffledArray = shuffle(array);
console.log("Shuffled array: " + shuffledArray);
