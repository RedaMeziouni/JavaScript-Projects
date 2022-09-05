// The Game Board
const gameBoard = document.querySelector("#gameBoard");
// Set up the canvas
const ctx = gameBoard.getContext("2d");
// Score Text
const scoreText = document.querySelector("#scoreText");
// Reset Button
const resetBtn = document.querySelector("resetBtn");
// Set up the Snake and the Apple
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "green";
const snaleBoarder = "balck";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    {x: unitSize * 4, y: 0},
    {x: unitSize * 3, y: 0},
    {x: unitSize * 2, y: 0},
    {x: unitSize, y: 0},
    {x: 0, y: 0}
];

// Event Listner to the arrow keys
window.addEventListener("keydown", changeDirection);

// Event Listner to the reset button to restart the Game
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart() {};
function nextTick() {};
function clearBoard() {};
function createFood() {};
function drawFood() {};
function moveSnake() {};
function drawSnake() {};
function changeDirection() {};
function checkGameOver() {};
function displayGameOver() {};
function resetGame() {};