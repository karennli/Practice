const array = [0, 1, 4, 3, 2];
const array2 = [2, 4, 7, 3, 9];

const bubbleSort = (arr) => {
  let len = arr.length - 1;
  while (len > 0) {
    let i = 0;
    while (i < len) {
      if (arr[i] > arr[i + 1]) {
        console.log(arr[i], arr[i + 1]);
        let x = arr[i];
        let y = arr[i + 1];
        arr[i] = y;
        arr[i + 1] = x;
      }
      i++;
    }
    len--;
  }
  return arr;
};

console.log(bubbleSort([...array]));
console.log(bubbleSort([...array2]));
