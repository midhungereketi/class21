var frect,mrect;
var g1,g2,g3,g4;

function setup() {
  createCanvas(800,400);
 frect= createSprite(400, 200, 50, 50);
mrect=createSprite(200,200,50,50);
frect.shapeColor="green";
mrect.shapeColor="green";
frect.velocityX=-5;
mrect.velocityX=5;
g1=createSprite(200,100,50,50);
g2=createSprite(600,100,50,50);
g3=createSprite(300,100,50,50);
g4=createSprite(700,100,50,50);
g1.shapeColor="green";
g2.shapeColor="green";
g3.shapeColor="green";
g4.shapeColor="green";

}

function draw() {
  background(255,255,255);  
  g1.x=World.mouseX;
g1.y=World.mouseY;
if(istouching(g1,g2)){
g1.shapeColor="red";
g2.shapeColor="red";
}else{
  g1.shapeColor="green";
g2.shapeColor="green";
}




 bounceoff(mrect,frect);

  drawSprites();
}





