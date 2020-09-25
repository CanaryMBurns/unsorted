export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateArrayRandomly = (length, min, max) => {
  return [...new Array(length)].map(() => {
      return getRandomInt(min, max);
  });
}

export const getProportion = (value, maxValue) => {
  return (value * 100) / maxValue;
}

export const swap = (arr, firstIndex, secondIndex) => {
  return new Promise(resolve => {
    window.requestAnimationFrame(function() {
      setTimeout(() => {
        let temp = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = temp;
        resolve();
      }, 250);
    });
  });
}

export const bubbleSort = async (arr) => {
  let len = arr.length;
  let i, j, stop;

  for (i = 0; i < len; i++) {
    for (j = 0, stop = len - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        await swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}