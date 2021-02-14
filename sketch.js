
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,dustbinImg

function preload()
{
	dustbinImg=loadImage("PngItem_2961810.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground=new Ground(width/2,670,width,20)

	ball=new Ball(100,660,38)
		
	Dustinbase=new Dustin(600,655,100,20)
    Dustinside1=new Dustin(540,610,20,110)
    Dustinside2=new Dustin(660,610,20,110)

	dustbin=createSprite(600,600,20,20)
	dustbin.addImage(dustbinImg)
	dustbin.scale=0.2
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display()
  ball.display()
  Dustinbase.display()
  Dustinside1.display()
  Dustinside2.display()
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-200});
	   
	 }
   }



