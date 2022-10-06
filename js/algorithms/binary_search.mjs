export default function binarySearch(array, valueToFind) {
  let isValueFound = false;

  let lowerBound = 1;
  let upperBound = array.length;

  while (!isValueFound) {
    const midPoint = Math.floor(lowerBound + (upperBound - lowerBound) / 2);
    console.log("-----");
    console.log("lowerBound:", lowerBound, "upperBound:", upperBound);
    console.log("midPoint", midPoint);
    if (array[midPoint] < valueToFind) {
      lowerBound = midPoint + 1;
    }
    if (array[midPoint] > valueToFind) {
      upperBound = midPoint - 1;
    }

    if (array[midPoint] === valueToFind) {
      console.log("Found value:", valueToFind);
      return midPoint;
    }
  }
}
