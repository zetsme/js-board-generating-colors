const board = document.querySelector('.board');
const startBtn = document.querySelector('.start-btn');
const CELLS_NUMBER = 400;
const colors = [
  'AliceBlue',
  'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Beige',
  'Bisque',
  'Black',
  'BlanchedAlmond',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenRod',
  'DarkGray',
  'DarkGrey',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGray',
  'DarkSlateGrey',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DimGrey',
  'DodgerBlue',
  'FireBrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'GoldenRod',
  'Gray',
  'Grey',
  'Green',
  'GreenYellow',
  'HoneyDew',
  'HotPink',
  'IndianRed',
  'Indigo',
  'Ivory',
  'Khaki',
  'Lavender',
  'LavenderBlush',
  'LawnGreen',
  'LemonChiffon',
  'LightBlue',
  'LightCoral',
  'LightCyan',
  'LightGoldenRodYellow',
  'LightGray',
  'LightGrey',
  'LightGreen',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'LightSlateGray',
  'LightSlateGrey',
  'LightSteelBlue',
  'LightYellow',
  'Lime',
  'LimeGreen',
  'Linen',
  'Magenta',
  'Maroon',
  'MediumAquaMarine',
  'MediumBlue',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumSpringGreen',
  'MediumTurquoise',
  'MediumVioletRed',
  'MidnightBlue',
  'MintCream',
  'MistyRose',
  'Moccasin',
  'NavajoWhite',
  'Navy',
  'OldLace',
  'Olive',
  'OliveDrab',
  'Orange',
  'OrangeRed',
  'Orchid',
  'PaleGoldenRod',
  'PaleGreen',
  'PaleTurquoise',
  'PaleVioletRed',
  'PapayaWhip',
  'PeachPuff',
  'Peru',
  'Pink',
  'Plum',
  'PowderBlue',
  'Purple',
  'RebeccaPurple',
  'Red',
  'RosyBrown',
  'RoyalBlue',
  'SaddleBrown',
  'Salmon',
  'SandyBrown',
  'SeaGreen',
  'SeaShell',
  'Sienna',
  'Silver',
  'SkyBlue',
  'SlateBlue',
  'SlateGray',
  'SlateGrey',
  'Snow',
  'SpringGreen',
  'SteelBlue',
  'Tan',
  'Teal',
  'Thistle',
  'Tomato',
  'Turquoise',
  'Violet',
  'Wheat',
  'White',
  'WhiteSmoke',
  'Yellow',
  'YellowGreen',
];
let run = false;
let interval;
for (let i = 0; i < CELLS_NUMBER; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('mouseover', () => !run && setRandomColor(cell));
  cell.addEventListener('mouseleave', () => !run && removeColor(cell));
  board.appendChild(cell);
}

const generateColors = () => {
  const cells = document.querySelectorAll('.cell');
  const randomCell = cells[Math.floor(Math.random() * CELLS_NUMBER)];
  setRandomColor(randomCell);
  setTimeout(() => {
    removeColor(randomCell);
  }, 4000);
};

const setRandomColor = (element) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 10px ${color}`;
};
const removeColor = (element) => {
  element.removeAttribute('style');
};

startBtn.addEventListener('click', () => {
  run = true;
  createStopBtn();
  interval = setInterval(generateColors, 200);
});

const createStopBtn = () => {
  const stopBtn = document.createElement('btn');
  stopBtn.classList.add('btn', 'stop-btn');
  stopBtn.textContent = 'STOP';
  stopBtn.style.backgroundColor = randomLightColor();
  const stopBtnTop =
    startBtn.getBoundingClientRect().height + startBtn.getBoundingClientRect().top + 20;
  stopBtn.style.top = stopBtnTop + 'px';
  stopBtn.addEventListener('click', stopGenerate);
  document.body.appendChild(stopBtn);
};

const stopGenerate = () => {
  run = false;
  clearInterval(interval);
  document.querySelector('.stop-btn').remove();
  document.querySelectorAll('.cell').forEach(removeColor);
};

const randomLightColor = () => {
  color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
  return color;
};
board.addEventListener('dblclick', () => run && stopGenerate());
