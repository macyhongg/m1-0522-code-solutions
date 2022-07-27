/* exported findIndex */

function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    if (current != value && current === array.length) {
      return -1;
    }
    else if (current === value) {
      return i;
    }
    }
  }
