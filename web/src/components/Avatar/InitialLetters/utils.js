/**
 *  Retorna as iniciais do nome do profile
 */
export const getInitialLetters = name => {
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

/**
 * Retorna uma cor aleatória
 */

const defaultListColor = [
  {letter: '#A28FD0', background: '#F4EFFC'},
  {letter: '#CB946C', background: '#FCF4EE'},
  {letter: '#83CEC9', background: '#EBFBFA'},
  {letter: '#CC7584', background: '#FFEEF1'},
  {letter: '#A8D080', background: '#F4F9EF'},
  {letter: '#CCCC8B', background: '#FCFCEF'},
];

function randomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomColor = colors => {
  if (!colors) {
    colors = defaultListColor;
  }
  return colors[randomIntInclusive(0, colors.length - 1)];
};
