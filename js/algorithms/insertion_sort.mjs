export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // [4, 4, 0, 51, 23, 10, 9, 15]
      j = j - 1; // j = -1
    }
    arr[j + 1] = key; // [1, 4, 0, 51, 23, 10, 9, 15]
  }
  return arr;
}

const unsorted = [4, 1, 0, 51, 23, 10, 9, 15];

console.log(insertionSort(unsorted));
