const array = [2, 5, 6, 10, 3, 5, 7, 4];
function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 5));
