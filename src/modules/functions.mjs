export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateArrayRandomly = (length, min, max) => {
  return [...new Array(length)].map(() => {
      return {
        isActive: false,
        value: getRandomInt(min, max)
      }
  });
}

export const getProportion = (value, maxValue) => {
  return (value * 100) / maxValue;
}