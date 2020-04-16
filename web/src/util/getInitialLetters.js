const initialLetters = name => {
  if(name === null) return 'NO';
  
  const arrayName = name.split(' ');
  const arrayLetters = [];

  if (arrayName.length >= 2) {
    arrayLetters[0] = arrayName[0].substring(0, 1);
    arrayLetters[1] = arrayName[arrayName.length - 1].substring(0, 1);
    return arrayLetters.join('').toUpperCase();
  }
  if (arrayName.length === 1) {
    return arrayName[0].substring(0, 2).toUpperCase();
  }
  return 'NO';
};

export default initialLetters;
