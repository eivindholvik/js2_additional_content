function binarySearch(array, searchFor) {
  let found = false;
  let lowerBound = 0;
  let upperBound = array.length;
  let midPoint = Math.floor((lowerBound + upperBound) / 2);
  while (!found) {
    if (array[midPoint] === searchFor) {
      found = true;
      return midPoint;
    }
    if (array[midPoint] > searchFor) {
      console.log("Ned");
      upperBound = midPoint - 1;
    } else {
      console.log("opp");
      lowerBound = midPoint + 1;
    }
    midPoint = midPoint = Math.floor((lowerBound + upperBound) / 2);
  }
}

const searchArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

console.log(binarySearch(searchArray, 14));
