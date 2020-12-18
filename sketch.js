
var bullet,wall
var speed,weight
var thickness
var dm


function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed = random(223,321)
  weight = random(30,52)
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "blue"
  bullet.velocityX= speed;
  bullet.shapeColor= "white"
}

function draw() {
  
  background(0);  
  if(hasCollided(bullet,wall))
   
  {
    bullet.velocityX=0;
     dm =0.5*weight*speed*speed/(thickness*thickness*thickness);
  
     if(dm<10){
       bullet.shapeColor = "green"
  
     }
     if(dm>10)
     {
       bullet.shapeColor = "red"
     }
    }
 
drawSprites();
}                                                   