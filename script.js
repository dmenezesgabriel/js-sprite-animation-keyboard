const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 500);

const keys = [];

const player = {
  x: 200,
  y: 200,
  width: 40,
  height: 72,
  frameX: 0,
  frameY: 0,
  speed: 9,
  moving: false,
};

const playerSprite = new Image();
playerSprite.src = "chewie.png";
const background = new Image();
background.src = "tattooine_game_background.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  drawSprite(
    playerSprite,
    player.width * player.frameX,
    player.height * player.frameY,
    player.width,
    player.height,
    player.x,
    player.y,
    player.width,
    player.height
  );
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("keydown", function (e) {
  keys[e.key] = true;
  movePLayer();
  console.log(e.key);
});

window.addEventListener("keyup", function (e) {
  delete keys[e.key];
});

function movePLayer() {
  // move up without crossing screen limits
  if (keys["w"] && player.y > 100) {
    player.y -= player.speed;
    player.frameY = 3;
  } else if (keys["s"] && player.y) {
    player.y += player.speed;
    player.frameY = 3;
  }
}
