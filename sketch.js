const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var rope1,rope2,rope3, rope4,rope5;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject;
var world;

function setup(){
	createCanvas(850, 650);
	rectMode(CENTER);
    engine = Engine.create();
	world = engine.world;
	roofObject=new roof(420,250,230,20);
	bobObject1 = new bob(320,575,40);
	bobObject2 = new bob(360,575,40);
	rope1=new rope(bobObject1.body,roofObject.body,-85, 10);
	rope2=new rope(bobObject2.body,roofObject.body,-45, 10);
	bobObject3 = new bob(400,575,40);
	bobObject4 = new bob(440,575,40);
	bobObject5 = new bob(480,575,40);
	rope3=new rope(bobObject3.body,roofObject.body,-10, 10);
	rope4=new rope(bobObject4.body,roofObject.body, 30, 10);
	rope5=new rope(bobObject5.body,roofObject.body, 70, 10);

	Engine.run(engine);
	keyPressed();
}


function draw(){
  rectMode(CENTER);
  background("lightblue");
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  textSize(50);
  fill("white");
  text("Newton's Cradle",250,50);
  textSize(50);
  fill("white");
  text("______________",230,55);
  textSize(50);
  fill("white");
  text("______________",245,55);
  textSize(30);
  fill("white");
  stroke("red");
  strokeWeight(4);
  text("Use the UP arrow to start",250,120);
  textSize(30);
  fill("white");
  stroke("red");
  strokeWeight(4);
  text("of the Newton's Cradle",270,160);

}

function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
	}}