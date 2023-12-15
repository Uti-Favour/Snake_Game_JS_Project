const board = document.getElementById("game-board");

//game variable
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = generateFood();
let direction = "right";

//map function
function draw() {
  board.innerHTML = "";
  drawSnake();
  drawFood();
}

//function to draw the snake
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
}

//function to draw the snake food
function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

//Placement of the snake in the board
function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

//Testing draw function
draw();

//Draw food function
function drawFood() {
  const foodElement = createGameElement("div", "food");
  setPosition(foodElement, food);
  board.appendChild(foodElement);
}

//generate food
function generateFood() {
  const x = Math.floor(Math.random() * gridSize) + 1;
  const y = Math.floor(Math.random() * gridSize) + 1;
  return { x, y };
}

//moving the snake
function move() {
  const head = { ...snake[0] };
  switch (direction) {
    case "up":
      head.y--;
      break;

    case "down":
      head.y++;
      break;

    case "left":
      head.x--;
      break;

    case "right":
      head.x++;
      break;
  }

  snake.unshift(head);

//   snake.pop();

if(head.x === food.x && head.y === food.y){
    food = generateFood();
}
}

//Test moving 
// setInterval(() => {
//   move(); //Move First
//   draw(); //Draw again new position
// }, 200);


