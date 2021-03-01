let canvas = document.getElementById('canvas_camp');
let context = canvas.getContext('2d');
let box = 32;
let snake = [];
let bgColor = '#AAAAAA';
let snakeColor = '#88fF88';
let direction = 'right';

snake[0] = {
  x: 8 * box,
  y: 8 * box,
};

function createBackground() {
  context.fillStyle = bgColor;
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
  for (let i = 0; i < snake.length; i++) {
    context.fillStyle = snakeColor;
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}
function gameInit() {
  createBackground();
  createSnake();
}

let game = setInterval(gameInit, 100);
