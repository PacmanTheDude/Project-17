var ball,img_ball,paddle,img_paddle;

function preload() {
  img_ball = loadImage("ball.png");
  img_paddle = loadImage("paddle.png")
}

function setup() {
  createCanvas(400, 400);
  paddle = createSprite(322,216,20,20);
  ball = createSprite(12,200,20,20);
  paddle.addImage("paddle",img_paddle);
  ball.addImage("ball", img_ball);
  ball.velocityX = 9;
  ball.velocityY = 8;
}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  
  paddle.y = mouseY;

  drawSprites();
  
}


