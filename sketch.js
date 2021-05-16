
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObj;
var world;

var engine;
function setup() {
	createCanvas(1600, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paperObj = new Paper(200,450,70);
	groundObject=new ground(width/2,570,width,20);
	dustbinObj=new dustbin(800,550);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:100,y:-135});
	}
}