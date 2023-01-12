function findEvenIndex(arr) {
  //Code goes here!

  for (let i = 0; i < arr.length; i++) {
    let left, right;

    if (i === 0) {
      left = 0;
    }
    if (i === arr.length - 1) {
      right = 0;
    }

    if (left !== 0) {
      left = 0;

      for (j = 0; j < i; j++) {
        left += arr[j];
      }
    }

    if (right !== 0) {
      right = 0;
      for (k = i + 1; k < arr.length; k++) {
        right += arr[k];
      }
    }

    if (left === right) return i;
  }

  return -1;
}
