function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const raffleColorFromList = colors => {
  return colors[getRandomIntInclusive(0, colors.length)];
};

export default raffleColorFromList;
