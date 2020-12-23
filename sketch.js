var fixed;
var moving;

function setup() {
  createCanvas(800,400);
  
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(600,200,70,40);
}

function draw() {
  background(random(0,250),random(0,250),random(0,250));  

  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  if(moving.x-fixed.x <= moving.width/2+fixed.width/2 &&
     fixed.x-moving.x <= moving.width/2+fixed.width/2 &&
      moving.y-fixed.y<= moving.height/2+fixed.height/2 && 
      fixed.y-moving.y<= moving.height/2+fixed.height/2){
    moving.shapeColor=color("red");
    fixed.shapeColor=color("red");
  }else{
    moving.shapeColor=color("blue");
    fixed.shapeColor=color("blue");
  }

  drawSprites();
}