var shipImg,ship,seaImg,sea;
function preload() {
  
 shipImg=loadAnimation("ship-1.png", "ship-2.png") 
 seaImage=loadImage("sea.png") 

}
function setup() {
  createCanvas(600,300);
  
  
  ship=createSprite(70,180,20,20)
  ship.addAnimation("ship",shipImg)
ship.scale=0.2
sea=createSprite(10,200,600,10);

sea.velocityX=-2;

}
function draw() {
 background("white")

ship.velocityX = ship.velocityX + 0.8



ship.collide(sea);
drawSprites() 


  
}