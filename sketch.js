const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;

var ball2;
function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var ground_options={
  isStatic:true
}
ground=Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);

var ball_options={
  restitution:0.8
}

ball=Bodies.circle(30,20,30,ball_options);
World.add(world,ball);

var ball2_options={
  restitution:0.8
}

ball2=Bodies.circle(60,20,60,ball2_options);
World.add(world,ball2);
} 

function draw () {
   background("black"); 
  Engine.update(engine);
  rectMode(CENTER);
 fill("white"); 
 rect(ground.position.x,ground.position.y ,400,20); 
 ellipseMode(CENTER);
 fill("white"); 
 ellipse(ball.position.x,ball.position.y ,30,30); 
 ellipseMode(CENTER);
 fill("pink"); 
 ellipse(ball2.position.x,ball2.position.y ,60,60); 
}