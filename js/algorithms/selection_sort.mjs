export default function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i; // 0 --- 1 --- 2
    for (let j = i + 1; j < arr.length; j++) {
      // startverdier j = 1 --- j = 2 --- j = 3
      if (arr[j] < arr[min]) {
        min = j; // 4 --- --- 3
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]]; // bytter verdier på arr[0] og arr[4] --- [1, 2, 6, 3, 10, 20, 5]

      // const temp = arr[i];
      // arr[i] = arr[min];
      // arr[min] = temp;
    }
  }
  return arr;
}

const unsorted = [10, 2, 6, 3, 1, 20, 5]; //[10, 2, 6, 3, 1, 20, 5]
