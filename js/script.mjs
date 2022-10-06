import bubbleSort from "./algorithms/bubble_sort.mjs";
import insertionSort from "./algorithms/insertion_sort.mjs";
import selectionSort from "./algorithms/selection_sort.mjs";
import linearSearch from "./algorithms/linear_search.mjs";
import binarySearch from "./algorithms/binary_search.mjs";

class SortAll {
  _sortArray = [3, 2, 5, 43, 6, 765, 4, 2, 324, 5, 6, 43, 3, 9];
  _searchFor = 6;

  constructor() {
    this.observers = [];
  }

  subscribe(functionToAdd) {
    this.observers.push(functionToAdd);
  }

  unsibscribe(functionToRemove) {
    this.observers.forEach((func, i) => {
      if (func == functionToRemove) {
        this.observers.splice(i, 1);
      }
    });
  }

  fire() {
    console.log("_sortArray:\n" + this._sortArray);
    this.observers.forEach((func) => {
      console.log(
        func.name + ":\n" + func.call(this, this._sortArray, this._searchFor)
      );
    });
  }
}

const Sorter = new SortAll();

Sorter.subscribe(bubbleSort);
// Sorter.subscribe(insertionSort);
// Sorter.subscribe(selectionSort);
// Sorter.subscribe(linearSearch);
// Sorter.subscribe(binarySearch);

Sorter.fire();
