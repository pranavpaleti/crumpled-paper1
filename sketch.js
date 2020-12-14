
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var engine,world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   
	engine = Engine.create();
	world = engine.world;
	paper=new Paper(100,100,30);
	//Create the Bodies Here.
	d1=new Dustbin(650,600,10,100); 
	d2=new Dustbin(700,650,100,10); 
	d3=new Dustbin(750,600,10,100)
    ground=new Dustbin(400,660,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paper.display();
  d1.display();
  d2.display();
  d3.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35})
	}
}


