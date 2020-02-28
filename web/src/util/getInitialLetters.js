const initialLetters = name => {
  return name
    .split(' ', 2)
    .map(str => str.substring(0, 1))
    .join('');
};

export default initialLetters;
