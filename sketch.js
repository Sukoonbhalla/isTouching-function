var fixedRect, movingRect,go1,go2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  go1 = createSprite(100,100,50,50);
  go2 = createSprite(300,300,50,50);
  go1.shapeColor = "blue";
  go2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,go1)){
    movingRect.shapeColor = "red";
    go1.shapeColor = "red";
  }
  else  {
    movingRect.shapeColor = "green";
   go1.shapeColor = "green";
  }
  drawSprites();
}

