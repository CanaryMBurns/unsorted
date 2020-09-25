export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const generateArrayRandomly = (length, min, max) => {
  return [...new Array(length)].map(() => {
      return getRandomInt(min, max)
  })
}