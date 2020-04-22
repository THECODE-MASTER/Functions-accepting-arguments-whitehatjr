function setup() {
  createCanvas(800,400);
  frect=createSprite(400, 200, 50, 50);
  mrect=createSprite(200,200,50,50);
  frect.visible=false;
  mrect.visible=false;
  orect=createSprite(400, 200, 50, 50);
  grect=createSprite(200,200,50,50);
  r1=createSprite(700,300,50,50);
  r2=createSprite(100,300,50,50);
  r1.velocityX=-3;
  r2.velocityX=3;
  r1.shapeColor="cyan";
  r2.shapeColor="yellow";
  r3=createSprite(300,390,50,50);
  r4=createSprite(300,10,50,50);
  r3.velocityY=-3;
  r4.velocityY=3;
  r3.shapeColor="green";
  r4.shapeColor="orange";
}
 
 
function draw() {
  background(0);  
  grect.x=World.mouseX;
  grect.y=World.mouseY;
  if(isTouching(orect,grect)){
    grect.shapeColor="green";
    orect.shapeColor="green";
  }
  else{
    grect.shapeColor="red";
    orect.shapeColor="red";
  }
 bounceoff(r3,r4);
  bounceoff(r1,r2);
  
 drawSprites();
}