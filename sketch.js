var thickness;
var wall,bullet;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(233,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor="red";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="yellow";
}

function draw() {
  background(0);  
  if(hasCollided(bullet, wall)){
  
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    if(damage>10){
      wall.shapeColor="blue";
    }
    if(damage<10){
      wall.shapeColor="orange";
    }
    
  }
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletrightedge = bullet.x+bullet.width;
  wallleftedge = wall.x;
  if(bulletrightedge>=wallleftedge){
    return true;
  }
  return false;
}