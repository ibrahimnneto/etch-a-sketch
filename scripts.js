const container = document.getElementById('container');
const btnSize = document.createElement('button');
const buttonsContainer = document.querySelector('.buttons');
let color = 'black';

function colorSquare() {
  if ((color === 'random')) {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function createRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i += 1) {
    const cell = document.createElement('div');
    cell.addEventListener('mouseover', colorSquare);
    container.appendChild(cell).className = 'grid-item';
  }
}

function changeColor(choice) {
  color = choice;
}

function clear() {
  const cells = container.querySelectorAll('.grid-item');
  cells.forEach((cell) => cell.remove());
}

function resize() {
  btnSize.textContent = 'Reset';
  btnSize.addEventListener('click', () => {
    const user = prompt('WHAT SIZE YOU WANT YOUR GRID TO BE? LIMIT OF 100');
    if (user === null || user < 1) {
      clear();
      createRows(16, 16);
      // grayColor();
      // rgbColors();
      // blackColor();
    } else if (user < 100) {
      clear();
      createRows(user, user);
      // grayColor();
      // rgbColors();
      // blackColor();
    }
  });
  buttonsContainer.appendChild(btnSize).classList.add('btn');
}
createRows(16, 16);
resize();
