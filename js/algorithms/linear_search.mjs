function linearSearch(inputList, value) {
  const list = [...inputList]; // I know this isnt mutated, but I'm making a fail-safe
  for (let i = 0; i < list.length; i++) {
    if (list[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 3, 6, 7, 8, 9], 3));
