// export default function bubbleSort(input) {
//   let array = [...input];

//   for (let i = 0; i < array.length; i++) {
//     let hasSwapped = false;

//     for (let j = 0; j < array.length; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//         hasSwapped = true;
//       }
//     }
//     if (!hasSwapped) {
//       return array;
//     }
//   }
//   return array;
// }

const unsorted = [4, 3, 6, 5, 2, 0, 1, 7, 8, 9];

const bubbleSort = (inputArr) => {
  let array = [...inputArr];

  // for (let i = 0; i < array.length; i++) {
  let swapped;
  do {
    swapped = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1], swapped] = [array[j + 1], array[j], true];
      }
    }
  } while (swapped);
  return array;
};

console.log(bubbleSort(unsorted));
